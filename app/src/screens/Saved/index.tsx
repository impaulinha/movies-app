import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSavedMovies } from '../../contexts/SavedMoviesContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../routes/stack.routes'
import { useNavigation } from '@react-navigation/native'
import { MovieCard } from '../../components/MovieCard'
import Icon from 'react-native-vector-icons/Feather'
import { Divider } from '../../components/Divider'
import { styles } from './styles'
import { useState } from 'react'

type ActiveList = 'watchlist' | 'watched'
type NavigationProp = StackNavigationProp<StackParamList, 'MovieDetails'>

export function Saved() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<NavigationProp>()

  const [activeList, setActiveList] = useState<ActiveList>('watchlist')
  const { watchlist, watched } = useSavedMovies()
  const dataToDisplay = activeList === 'watchlist' ? watchlist : watched

  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 5 }}>
      <Text style={styles.title}>Minha Lista</Text>
      <Divider />
      <View style={styles.optionsTab}>
        <TouchableOpacity
          style={[styles.tab, activeList === 'watchlist' && styles.activeTab]}
          onPress={() => setActiveList('watchlist')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeList === 'watchlist' && styles.activeTabText,
            ]}
          >
            Quero Assistir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeList === 'watched' && styles.activeTab]}
          onPress={() => setActiveList('watched')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeList === 'watched' && styles.activeTabText,
            ]}
          >
            Já Assisti
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataToDisplay}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              navigation.navigate('MovieDetails', { movieId: item.id })
            }
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Icon name="film" size={40} color="#555" />
            <Text style={styles.emptyText}>Sua lista está vazia.</Text>
            <Text style={styles.emptySubtext}>
              Adicione filmes para vê-los aqui!
            </Text>
          </View>
        )}
      />
    </View>
  )
}
