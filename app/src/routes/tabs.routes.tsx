import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'
import { Categories } from '../screens/Categories'
import { Search } from '../screens/Search'
import { Saved } from '../screens/Saved'
import { Home } from '../screens/Home'
import { theme } from '../global/theme'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.textPrimary,
        tabBarActiveTintColor: theme.colors.info,
        tabBarStyle: {
          position: 'absolute',
          bottom: 2,
          backgroundColor: theme.colors.surface + 'E6',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: 'Pesquisar',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: 'Categorias',
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown: false,
          title: 'Salvos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
