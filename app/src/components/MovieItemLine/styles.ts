import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSize.md,
    width: 180,
  },
  movieImage: {
    width: 120,
    height: 80,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.border,
  },
})
