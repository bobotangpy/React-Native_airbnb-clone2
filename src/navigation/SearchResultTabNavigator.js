import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute} from '@react-navigation/native';
import SearchResultPage from '../screens/SearchResult';
import SearchResultMap from '../screens/SearchResultMap';

const Tab = createMaterialTopTabNavigator();

export default function SearchResultTabNavigator() {
  const route = useRoute();
  const guests = route.params.guests;
  const viewport = route.params.viewport;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen name="list">
        {() => <SearchResultPage guests={guests} viewport={viewport} />}
      </Tab.Screen>
      <Tab.Screen name="map">
        {() => <SearchResultMap guests={guests} viewport={viewport} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
