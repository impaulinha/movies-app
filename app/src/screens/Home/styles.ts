import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  heroTitle: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.title,
    fontSize: theme.fontSize.xxl,
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    textTransform: 'uppercase',
  },
})
