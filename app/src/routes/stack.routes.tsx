import { createStackNavigator } from '@react-navigation/stack'
import { MovieDetails } from '../screens/MovieDetails'
import { TabRoutes } from './tabs.routes'
import { MoviesByCategory } from '../screens/MoviesByCategory'

export type StackParamList = {
  MainTabs: undefined
  MovieDetails: { movieId: number }
  MoviesByCategory: { categoryId: number; categoryName: string }
}

const Stack = createStackNavigator<StackParamList>()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MoviesByCategory"
        component={MoviesByCategory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
