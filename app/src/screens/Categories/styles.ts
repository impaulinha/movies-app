import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  item: {
    padding: theme.spacing.lg,
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.fontSize.md,
  },
})
