// src/screens/SavedScreen/styles.ts
import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontFamily: theme.fonts.title,
    color: theme.colors.textPrimary,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
  },
  optionsTab: {
    flexDirection: 'row',
    marginHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.border,
    borderRadius: theme.radius.md,
    marginVertical: theme.spacing.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
    borderRadius: theme.radius.md,
  },
  activeTab: {
    backgroundColor: theme.colors.secondary,
  },
  tabText: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.subtitle,
    fontSize: theme.fontSize.md,
  },
  activeTabText: {
    color: theme.colors.border,
  },
  listContent: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  emptyContainer: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: theme.spacing.md,
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.textSecondary,
  },
  emptySubtext: {
    marginTop: theme.spacing.sm,
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
})
