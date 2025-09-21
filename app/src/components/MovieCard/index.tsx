import { TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { Movie } from '../../types/movie'

type MovieCardProps = {
  movie: Movie
  onPress?: () => void
}

export function MovieCard({ movie, onPress }: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <Image source={{ uri: imageUrl }} style={styles.img} />
    </TouchableOpacity>
  )
}
