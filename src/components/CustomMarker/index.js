import React from 'react';
import {View, Text} from 'react-native';
import {Marker} from 'react-native-maps';

export default function CustomMarker({
  coordinates,
  price,
  isSelected,
  onPress,
}) {
  return (
    <Marker coordinate={coordinates} onPress={onPress}>
      <View
        style={{
          padding: 5,
          backgroundColor: isSelected ? '#fff' : '#000',
          borderRadius: 10,
        }}>
        <Text style={{color: isSelected ? '#000' : '#fff', fontWeight: 'bold'}}>
          ${price}
        </Text>
      </View>
    </Marker>
  );
}
