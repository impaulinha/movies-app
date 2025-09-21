import Icon from 'react-native-vector-icons/Feather'
import { View, TextInput } from 'react-native'
import { theme } from '../../global/theme'
import { styles } from './styles'

type SearchProps = {
  value: string
  onSearchChange: (text: string) => void
}

export function SearchInput({ value, onSearchChange }: SearchProps) {
  function handleSearchChange(text: string) {
    onSearchChange(text)
  }

  return (
    <View style={styles.container}>
      <Icon name="search" color={theme.colors.textPrimary} size={20} />
      <TextInput
        placeholder="Pesquisar..."
        style={styles.input}
        placeholderTextColor={theme.colors.textPrimary}
        maxLength={60}
        onChangeText={handleSearchChange}
        value={value}
      />
    </View>
  )
}
