import { Movie, MovieDetails } from '../types/movie'
import { api } from './api'

interface MoviesResponse {
  results: Movie[]
}

export async function getPopularMovies(): Promise<Movie[]> {
  try {
    const response = await api.get<MoviesResponse>('/movie/popular')
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error)
    return []
  }
}

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await api.get<MoviesResponse>('/search/movie', {
      params: {
        query,
      },
    })
    return response.data.results
  } catch (error) {
    console.error('Erro ao pesquisar filmes:', error)
    return []
  }
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  try {
    const response = await api.get<MoviesResponse>('/movie/top_rated')
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar filmes mais bem avaliados:', error)
    return []
  }
}

export async function getNowPlayingMovies(): Promise<Movie[]> {
  try {
    const response = await api.get<MoviesResponse>('/movie/now_playing')
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar filmes em cartaz:', error)
    return []
  }
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  try {
    const response = await api.get<MoviesResponse>('/movie/upcoming')
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar próximos lançamentos:', error)
    return []
  }
}

export async function getMovieDetails(
  movieId: number,
): Promise<MovieDetails | null> {
  try {
    const response = await api.get<MovieDetails>(`/movie/${movieId}`)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error)
    return null
  }
}
