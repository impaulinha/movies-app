import { SavedMoviesProvider } from './src/contexts/SavedMoviesContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'

function App() {
  return (
    <SafeAreaProvider>
      <SavedMoviesProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Routes />
      </SavedMoviesProvider>
    </SafeAreaProvider>
  )
}

export default App
