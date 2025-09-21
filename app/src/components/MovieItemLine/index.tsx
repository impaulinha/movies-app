import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { theme } from '../../global/theme'
import { Movie } from '../../types/movie'

type MovieItemLineProps = {
  movie: Movie
  onPress: () => void
}

export function MovieItemLine({ movie, onPress }: MovieItemLineProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.align}>
        <Image source={{ uri: imageUrl }} style={styles.movieImage} />
        <Text style={styles.text} numberOfLines={2}>
          {movie.title}
        </Text>
      </View>
      <Icon name="chevron-right" size={24} color={theme.colors.textPrimary} />
    </TouchableOpacity>
  )
}
