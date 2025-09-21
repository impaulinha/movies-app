import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.info,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    padding: theme.spacing.sm + 4,
    borderRadius: theme.radius.md,
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.fontSize.md,
    textTransform: 'uppercase',
  },
})
