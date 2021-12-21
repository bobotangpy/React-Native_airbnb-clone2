import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultPage from '../screens/SearchResult';
import SearchResultMap from '../screens/SearchResultMap';

const Tab = createMaterialTopTabNavigator();

export default function SearchResultTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen name="list" component={SearchResultPage} />
      <Tab.Screen name="map" component={SearchResultMap} />
    </Tab.Navigator>
  );
}
