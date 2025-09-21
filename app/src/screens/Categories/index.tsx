import { TouchableOpacity, Text, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../../components/SearchInput'
import { getCategories } from '../../services/categories'
import { Divider } from '../../components/Divider'
import { Category } from '../../types/category'
import { useState, useEffect } from 'react'
import { styles } from './styles'

export function Categories() {
  const insets = useSafeAreaInsets()

  const [categories, setCategories] = useState<Category[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    try {
      const data = await getCategories()
      setCategories(data)
      console.log(data)
    } catch (error) {
      console.error('Falha ao buscar categorias:', error)
    }
  }

  function filterCategories() {
    return categories.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 5 }}>
      <SearchInput value={search} onSearchChange={setSearch} />
      <FlatList
        data={filterCategories()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.8}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  )
}
