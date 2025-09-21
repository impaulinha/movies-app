import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  poster: {
    width: '100%',
    height: 450,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.radius.md,
  },
  rankContainer: {
    position: 'absolute',
    bottom: 10,
    left: 30,
  },
  text: {
    fontSize: 80,
    fontFamily: theme.fonts.title,
    color: theme.colors.textPrimary,
  },
  img: {
    borderRadius: theme.radius.md,
  },
})
