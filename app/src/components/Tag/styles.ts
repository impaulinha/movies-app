import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
    paddingVertical: 2,
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.extraLight,
    fontSize: theme.fontSize.sm,
    textTransform: 'uppercase',
  },
})
