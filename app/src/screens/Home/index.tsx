import { View, ScrollView, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { useEffect, useState } from 'react'
import { Movie } from '../../types/movie'
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
} from '../../services/movies'
import { MovieList } from '../../components/MovieList'
import { HeroCard } from '../../components/HeroCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StackParamList } from 'src/routes/stack.routes'
import { StackNavigationProp } from '@react-navigation/stack'

type NavigationProp = StackNavigationProp<StackParamList, 'MovieDetails'>

export function Home() {
  const insets = useSafeAreaInsets()

  const [heroMovies, setHeroMovies] = useState<Movie[]>([])
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

  const navigation = useNavigation<NavigationProp>()

  async function loadData() {
    try {
      const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
        getNowPlayingMovies(),
      ])

      setHeroMovies(popular.slice(0, 3))
      setPopularMovies(popular)
      setTopRatedMovies(topRated)
      setUpcomingMovies(upcoming)
      setNowPlaying(nowPlaying)
    } catch (error) {
      console.error('Erro ao carregar dados da Home:', error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  function handleMoviePress(movie: Movie) {
    navigation.navigate('MovieDetails', {
      movieId: movie.id,
    })
  }

  return (
    <ScrollView style={{ ...styles.container, paddingTop: insets.top + 5 }}>
      <View>
        <Text style={styles.heroTitle}>Top 3 populares</Text>
        <FlatList
          data={heroMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <HeroCard
              movie={item}
              rank={index + 1}
              onPress={() => handleMoviePress(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate="fast"
        />
      </View>

      <MovieList
        title="Populares"
        movies={popularMovies}
        onMoviePress={handleMoviePress}
      />
      <MovieList
        title="Bem avaliados"
        movies={topRatedMovies}
        onMoviePress={handleMoviePress}
      />
      <MovieList
        title="Próximos lançamentos"
        movies={upcomingMovies}
        onMoviePress={handleMoviePress}
      />
      <MovieList
        title="Em cartaz"
        movies={nowPlaying}
        onMoviePress={handleMoviePress}
      />
    </ScrollView>
  )
}
