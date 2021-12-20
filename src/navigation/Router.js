import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/Home';
import DestinationSearchPage from '../screens/DestinationSearch/index';
import SearchResultPage from '../screens/SearchResult';
import GuestScreen from '../screens/Guest/index.js';
import HomeTabNavigator from './HomeTabNavigator.js';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchPage}
        />
        <Stack.Screen name="Guests" component={GuestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
