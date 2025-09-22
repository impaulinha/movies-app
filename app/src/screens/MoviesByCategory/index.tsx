import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../../components/SearchInput'
import { StackParamList } from '../../routes/stack.routes'
import { getMoviesByGenre } from '../../services/movies'
import { MovieCard } from '../../components/MovieCard'
import { View, Text, FlatList } from 'react-native'
import { Divider } from '../../components/Divider'
import { useEffect, useState } from 'react'
import { Movie } from '../../types/movie'
import { styles } from './styles'
import { StackNavigationProp } from '@react-navigation/stack'

type NavigationRouteProps = RouteProp<StackParamList, 'MoviesByCategory'>
type NavigationProps = StackNavigationProp<StackParamList, 'MoviesByCategory'>

export function MoviesByCategory() {
  const route = useRoute<NavigationRouteProps>()
  const { categoryId, categoryName } = route.params
  const navigation = useNavigation<NavigationProps>()
  const insets = useSafeAreaInsets()

  const [movies, setMovies] = useState<Movie[]>([])
  const [searchMovie, setSearchMovie] = useState('')

  useEffect(() => {
    loadMoviesByCategory()
  }, [])

  async function loadMoviesByCategory() {
    try {
      const response = await getMoviesByGenre(categoryId)
      setMovies(response)
    } catch (error) {
      console.log('Erro ao carregar filmes por categoria: ', error)
    }
  }

  function filterMovies() {
    return movies.filter((item) =>
      item.title.toLowerCase().includes(searchMovie.toLowerCase()),
    )
  }

  return (
    <FlatList
      data={filterMovies()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() =>
            navigation.navigate('MovieDetails', { movieId: item.id })
          }
        />
      )}
      numColumns={2}
      style={{ ...styles.container, paddingTop: insets.top + 5 }}
      contentContainerStyle={styles.flatlistContainer}
      ListHeaderComponent={
        <View style={styles.header}>
          <SearchInput value={searchMovie} onSearchChange={setSearchMovie} />
          <Text style={styles.category}>{categoryName}</Text>
          <Divider />
        </View>
      }
    />
  )
}
