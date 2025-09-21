import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.border,
    margin: theme.spacing.md,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  input: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.md,
    width: '90%',
  },
})
