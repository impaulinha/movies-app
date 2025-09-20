import axios from 'axios'
import { TMDB_BASE_URL, TMDB_API_ACCESS_TOKEN } from '@env'

export const api = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}`,
  },
  params: {
    language: 'pt-BR',
  },
})
