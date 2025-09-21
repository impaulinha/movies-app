import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContentContainer: {
    paddingBottom: 100, // Adiciona um bom espaço no final do scroll
  },
  imgBg: {
    width: '100%',
    height: 500,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  infos: {
    padding: theme.spacing.md,
  },
  title: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.title,
    fontSize: theme.fontSize.xl,
  },
  description: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.body,
    textAlign: 'justify',
    fontSize: theme.fontSize.md,
    marginBottom: theme.spacing.lg,
  },
  tags: {
    flexDirection: 'row',
    marginVertical: theme.spacing.sm,
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  back: {
    margin: theme.spacing.md,
    alignSelf: 'flex-start',
  },
  loader: {},
})
