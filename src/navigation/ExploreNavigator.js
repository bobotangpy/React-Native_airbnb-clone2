import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
// import SearchResultPage from '../screens/SearchResult';
import SearchResultTabNavigator from './SearchResultTabNavigator';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SearchResult"
        component={SearchResultTabNavigator}
        // options={{headerShown: false}}
        options={{title: 'Listings'}}
      />
    </Stack.Navigator>
  );
}
