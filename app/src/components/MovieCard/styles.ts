import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.sm,
  },
  img: {
    borderRadius: theme.radius.sm,
    width: 160,
    height: 230,
    backgroundColor: theme.colors.border,
  },
})
