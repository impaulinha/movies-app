import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackNavigationProp } from '@react-navigation/stack'
import { SearchInput } from '../../components/SearchInput'
import { StackParamList } from '../../routes/stack.routes'
import { getMoviesByGenre } from '../../services/movies'
import { MovieCard } from '../../components/MovieCard'
import Icon from 'react-native-vector-icons/Feather'
import { Divider } from '../../components/Divider'
import { Load } from '../../components/Load'
import { useEffect, useState } from 'react'
import { theme } from '../../global/theme'
import { Movie } from '../../types/movie'
import { styles } from './styles'

type NavigationRouteProps = RouteProp<StackParamList, 'MoviesByCategory'>
type NavigationProps = StackNavigationProp<StackParamList, 'MoviesByCategory'>

export function MoviesByCategory() {
  const route = useRoute<NavigationRouteProps>()
  const { categoryId, categoryName } = route.params
  const navigation = useNavigation<NavigationProps>()
  const insets = useSafeAreaInsets()

  const [movies, setMovies] = useState<Movie[]>([])
  const [searchMovie, setSearchMovie] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadMoviesByCategory()
  }, [])

  async function loadMoviesByCategory() {
    try {
      const response = await getMoviesByGenre(categoryId)
      setMovies(response)
    } catch (error) {
      console.log('Erro ao carregar filmes por categoria: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  function filterMovies() {
    return movies.filter((item) =>
      item.title.toLowerCase().includes(searchMovie.toLowerCase()),
    )
  }

  if (isLoading) {
    return <Load />
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
      contentContainerStyle={{
        ...styles.flatlistContainer,
        paddingBottom: insets.bottom + 50,
      }}
      ListHeaderComponent={
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name="arrow-left"
              color={theme.colors.textPrimary}
              size={theme.fontSize.xxl}
            />
            <Text style={styles.category}>{categoryName}</Text>
          </TouchableOpacity>
          <SearchInput value={searchMovie} onSearchChange={setSearchMovie} />
          <Divider />
        </View>
      }
    />
  )
}
