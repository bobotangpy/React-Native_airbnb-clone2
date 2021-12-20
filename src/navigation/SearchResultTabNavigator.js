import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultPage from '../screens/SearchResult';

const Tab = createMaterialTopTabNavigator();

export default function SearchResultTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen name="list" component={SearchResultPage} />
      <Tab.Screen name="map" component={SearchResultPage} />
    </Tab.Navigator>
  );
}
