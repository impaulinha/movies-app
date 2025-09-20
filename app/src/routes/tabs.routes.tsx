import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Categories } from '../screens/Categories'
import { Search } from '../screens/Search'
import { Saved } from '../screens/Saved'
import { Home } from '../screens/Home'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  )
}
