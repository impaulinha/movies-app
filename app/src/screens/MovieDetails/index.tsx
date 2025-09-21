import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useSavedMovies } from '../../contexts/SavedMoviesContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackParamList } from '../../routes/stack.routes'
import LinearGradient from 'react-native-linear-gradient'
import { getMovieDetails } from '../../services/movies'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from '../../components/Button'
import { MovieById } from '../../types/movie'
import { useEffect, useState } from 'react'
import { Tag } from '../../components/Tag'
import { theme } from '../../global/theme'

type NavigationProps = RouteProp<StackParamList, 'MovieDetails'>

export function MovieDetails() {
  const insets = useSafeAreaInsets()
  const route = useRoute<NavigationProps>()
  const navigation = useNavigation()
  const { movieId } = route.params
  const [movie, setMovie] = useState<MovieById | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`
  const releaseYear = movie?.release_date
    ? movie.release_date.substring(0, 4)
    : 'N/A'
  const {
    watchlist,
    watched,
    addToWatched,
    addToWatchlist,
    isMovieInWatched,
    isMovieInWatchlist,
    removeFromWatched,
    removeFromWatchlist,
  } = useSavedMovies()
  const isInWatchlist = movie ? isMovieInWatchlist(movie.id) : false
  const hasBeenWatched = movie ? isMovieInWatched(movie.id) : false

  useEffect(() => {
    loadMovie()
  }, [movieId])

  async function loadMovie() {
    try {
      const response = await getMovieDetails(movieId)
      setMovie(response)
    } catch (error) {
      console.error('Erro ao carregar dados do filme: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleToggleWatchlist() {
    if (!movie) return

    if (isInWatchlist) {
      removeFromWatchlist(movie.id)
    } else {
      addToWatchlist(movie)
      if (hasBeenWatched) {
        removeFromWatched(movie.id)
      }
    }
  }

  function handleToggleWatched() {
    if (!movie) return

    if (hasBeenWatched) {
      removeFromWatched(movie.id)
    } else {
      addToWatched(movie)
      if (isInWatchlist) {
        removeFromWatchlist(movie.id)
      }
    }
  }

  if (isLoading || !movie) {
    return <ActivityIndicator size="large" color="#fff" style={styles.loader} />
  }

  return (
    <ScrollView
      style={{ ...styles.container, paddingTop: insets.top + 5 }}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <ImageBackground source={{ uri: backdropUrl }} style={styles.imgBg}>
        <LinearGradient
          colors={['transparent', '#0F0F0F']}
          style={styles.gradient}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="arrow-left"
            color={theme.colors.textPrimary}
            size={theme.fontSize.xxl}
          />
        </TouchableOpacity>

        <View style={styles.topBtns}>
          <TouchableOpacity
            style={styles.iconsBtn}
            activeOpacity={0.8}
            onPress={handleToggleWatchlist}
          >
            <Icon
              name="bookmark"
              size={theme.fontSize.xl}
              color={
                isInWatchlist
                  ? theme.colors.secondary
                  : theme.colors.textPrimary
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconsBtn}
            activeOpacity={0.8}
            onPress={handleToggleWatched}
          >
            <Icon
              name={hasBeenWatched ? 'eye' : 'eye-off'}
              size={theme.fontSize.xl}
              color={
                hasBeenWatched
                  ? theme.colors.secondary
                  : theme.colors.textPrimary
              }
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.infos}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.tags}>
          <Tag icon="star" text={movie.vote_average.toFixed(1)} />
          {movie.genres[0] && <Tag text={movie.genres[0].name} />}
          <Tag text={releaseYear} />
        </View>
        <Text style={styles.description}>{movie.overview}</Text>
        <Button text="Agendar data" icon="calendar" />
      </View>
    </ScrollView>
  )
}
