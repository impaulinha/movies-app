import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Routes } from './src/routes'

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </SafeAreaProvider>
  )
}

export default App
