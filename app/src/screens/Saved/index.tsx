import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSavedMovies } from '../../contexts/SavedMoviesContext'
import { MovieCard } from '../../components/MovieCard'
import Icon from 'react-native-vector-icons/Feather'
import { styles } from './styles'

type ActiveList = 'watchlist' | 'watched'

export function Saved() {
  const [activeList, setActiveList] = useState<ActiveList>('watchlist')
  const { watchlist, watched, removeFromWatchlist, removeFromWatched } =
    useSavedMovies()

  const dataToDisplay = activeList === 'watchlist' ? watchlist : watched

  function handleRemovePress(movieId: number, movieTitle: string) {
    Alert.alert(
      'Remover Filme',
      `Tem certeza que deseja remover "${movieTitle}" da sua lista?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            if (activeList === 'watchlist') {
              removeFromWatchlist(movieId)
            } else {
              removeFromWatched(movieId)
            }
          },
        },
      ],
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha Lista</Text>

      {/* Abas para alternar entre as listas */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeList === 'watchlist' && styles.activeTab]}
          onPress={() => setActiveList('watchlist')}
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
          // Usando um wrapper para o botão de remover
          <TouchableOpacity
            onLongPress={() => handleRemovePress(item.id, item.title)} // Segurar para remover
          >
            <MovieCard movie={item} />
          </TouchableOpacity>
        )}
        numColumns={3}
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
    </SafeAreaView>
  )
}
