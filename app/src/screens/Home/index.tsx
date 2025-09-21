import { View, ScrollView } from 'react-native'
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

export function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

  async function loadData() {
    try {
      const [popular, topRated, upcoming, nowPlaying] = await Promise.all([
        getPopularMovies(),
        getTopRatedMovies(),
        getUpcomingMovies(),
        getNowPlayingMovies(),
      ])

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
    console.log('Filme Pressionado:', movie.title)
  }

  return (
    <ScrollView style={styles.container}>
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
