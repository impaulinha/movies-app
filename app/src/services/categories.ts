import { Category } from '../types/category'
import { api } from './api'

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/genre/movie/list')
  return response.data.genres
}
