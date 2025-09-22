import { SavedMoviesProvider } from './src/contexts/SavedMoviesContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <SafeAreaProvider>
      <SavedMoviesProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />
        <Routes />
      </SavedMoviesProvider>
    </SafeAreaProvider>
  )
}

export default App
