import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.subtitle,
    margin: theme.spacing.md,
    fontSize: theme.fontSize.lg,
  },
  empty: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.light,
    marginTop: '50%',
  },
})
