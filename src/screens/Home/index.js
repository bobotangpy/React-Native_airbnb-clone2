import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/core';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchBar}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchBtnText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/home.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SearchResult', {guests: null})}>
          <Text style={styles.btnText}>Explore nearby places.</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
