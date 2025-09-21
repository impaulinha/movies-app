import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { theme } from '../../global/theme'

type ButtonProps = TouchableOpacityProps & {
  text: string
  icon?: string
}

export function Button({ text, icon }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          color={theme.colors.textPrimary}
          size={theme.fontSize.lg}
        />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
