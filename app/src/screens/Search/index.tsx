import { getPopularMovies, searchMovies } from '../../services/movies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MovieItemLine } from '../../components/MovieItemLine'
import { SearchInput } from '../../components/SearchInput'
import { View, Text, FlatList } from 'react-native'
import { Divider } from '../../components/Divider'
import { useEffect, useState } from 'react'
import { Movie } from '../../types/movie'
import { styles } from './styles'

export function Search() {
  const insets = useSafeAreaInsets()

  const [recommendations, setRecommendations] = useState<Movie[]>([])
  const [searchMovie, setSearchMovie] = useState('')
  const [searchResults, setSearchResults] = useState<Movie[]>([])

  const listTitle =
    searchMovie.length > 2 ? 'Resultados da busca' : 'Recomendações'
  const dataToDisplay = searchMovie.length > 2 ? searchResults : recommendations

  useEffect(() => {
    loadRecommendations()
  }, [])

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchMovie.length > 2) {
        const movies = await searchMovies(searchMovie)
        setSearchResults(movies)
      } else {
        setSearchResults([])
      }
    }, 500)

    return () => clearTimeout(searchTimeout)
  }, [searchMovie])

  async function loadRecommendations() {
    const movies = await getPopularMovies()
    setRecommendations(movies)
  }

  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 5 }}>
      <SearchInput value={searchMovie} onSearchChange={setSearchMovie} />
      <Text style={styles.title}>{listTitle}</Text>
      <FlatList
        data={dataToDisplay}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieItemLine movie={item} />}
        ItemSeparatorComponent={Divider}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum filme encontrado.</Text>
        }
      />
    </View>
  )
}
