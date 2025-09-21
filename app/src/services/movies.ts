import { Movie } from '../types/movie'
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
