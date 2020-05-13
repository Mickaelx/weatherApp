import * as React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text } from 'react-native' 
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Search from './components/Search'
import About from './components/About'
import List from './components/List'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused
                ? 'ios-search'
                : 'ios-search-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='About' component={About} />
        <Tab.Screen name='List' component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



