import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
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
  const [movie, setMovie] = useState<MovieById>()
  const [isLoading, setIsLoading] = useState(true)
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`
  const releaseYear = movie?.release_date
    ? movie.release_date.substring(0, 4)
    : 'N/A'

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
