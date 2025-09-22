import { ActivityIndicator } from 'react-native'
import { theme } from '../../global/theme'
import { styles } from './styles'

export function Load() {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      color={theme.colors.secondary}
    />
  )
}
