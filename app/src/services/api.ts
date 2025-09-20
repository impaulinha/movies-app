import axios from 'axios'
import { TMDB_BASE_URL, TMDB_API_KEY } from '@env'

export const api = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'pt-BR',
  },
})
