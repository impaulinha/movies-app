import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Movie } from '../types/movie'

const WATCHLIST_KEY = '@MyMovies:watchlist'
const WATCHED_KEY = '@MyMovies:watched'

type SavedMoviesContextData = {
  watchlist: Movie[]
  watched: Movie[]
  addToWatchlist: (movie: Movie) => void
  removeFromWatchlist: (movieId: number) => void
  addToWatched: (movie: Movie) => void
  removeFromWatched: (movieId: number) => void
  isMovieInWatchlist: (movieId: number) => boolean
  isMovieInWatched: (movieId: number) => boolean
}

const SavedMoviesContext = createContext<SavedMoviesContextData>(
  {} as SavedMoviesContextData,
)

type SavedMoviesProviderProps = {
  children: ReactNode
}

export function SavedMoviesProvider({ children }: SavedMoviesProviderProps) {
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const [watched, setWatched] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStorageData()
  }, [])

  async function loadStorageData() {
    const storedWatchlist = await AsyncStorage.getItem(WATCHLIST_KEY)
    const storedWatched = await AsyncStorage.getItem(WATCHED_KEY)

    if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist))
    if (storedWatched) setWatched(JSON.parse(storedWatched))

    setIsLoading(false)
  }

  // Watchlist ("Quero Assistir")
  const addToWatchlist = async (movie: Movie) => {
    const newWatchlist = [...watchlist, movie]
    setWatchlist(newWatchlist)
    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(newWatchlist))
  }

  const removeFromWatchlist = async (movieId: number) => {
    const newWatchlist = watchlist.filter((movie) => movie.id !== movieId)
    setWatchlist(newWatchlist)
    await AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(newWatchlist))
  }

  // Watched "Já Assistidos"
  const addToWatched = async (movie: Movie) => {
    const newWatched = [...watched, movie]
    setWatched(newWatched)
    await AsyncStorage.setItem(WATCHED_KEY, JSON.stringify(newWatched))
  }

  const removeFromWatched = async (movieId: number) => {
    const newWatched = watched.filter((movie) => movie.id !== movieId)
    setWatched(newWatched)
    await AsyncStorage.setItem(WATCHED_KEY, JSON.stringify(newWatched))
  }

  const isMovieInWatchlist = (movieId: number) =>
    watchlist.some((movie) => movie.id === movieId)
  const isMovieInWatched = (movieId: number) =>
    watched.some((movie) => movie.id === movieId)

  if (isLoading) {
    return null
  }

  return (
    <SavedMoviesContext.Provider
      value={{
        watchlist,
        watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
        isMovieInWatchlist,
        isMovieInWatched,
      }}
    >
      {children}
    </SavedMoviesContext.Provider>
  )
}

export function useSavedMovies() {
  const context = useContext(SavedMoviesContext)
  return context
}
