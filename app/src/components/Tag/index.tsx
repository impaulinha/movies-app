import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { styles } from './styles'
import { theme } from '../../global/theme'

type TagProps = {
  icon?: string
  text: string
}

export function Tag({ icon, text }: TagProps) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={theme.fontSize.lg}
          color={theme.colors.textSecondary}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
