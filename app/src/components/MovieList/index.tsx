import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'
import { Movie } from '../../types/movie'
import { MovieCard } from '../MovieCard'

type MovieListProps = {
  title: string
  movies: Movie[]
  onViewAll?: () => void
  onMoviePress?: (movie: Movie) => void
}

export function MovieList({
  title,
  movies,
  onViewAll,
  onMoviePress,
}: MovieListProps) {
  const moviesToShow = movies.slice(0, 10)

  return (
    <View style={styles.container}>
      <View style={styles.viewTexts}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.text}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={moviesToShow}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => onMoviePress?.(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
