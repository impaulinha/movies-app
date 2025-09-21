import { TouchableOpacity, ImageBackground, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Movie } from '../../types/movie'
import { styles } from './styles'

type HeroCardProps = {
  movie: Movie
  rank: number
  onPress?: () => void
}

export function HeroCard({ movie, rank, onPress }: HeroCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w780${movie.poster_path}`

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.poster}
        imageStyle={styles.img}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <View style={styles.rankContainer}>
          <Text style={styles.text}>{rank}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}
