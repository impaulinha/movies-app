import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.sm,
    marginVertical: theme.spacing.md,
  },
  viewTexts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  title: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.fontSize.lg,
  },
  text: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSize.md,
  },
})
