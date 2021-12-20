/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

export default function GuestScreen() {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const Category = props => (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.subtext}</Text>
      </View>

      <View style={styles.count}>
        <Pressable
          style={styles.button}
          onPress={() =>
            props.person !== 0 ? props.handleCount(props.person - 1) : 0
          }>
          <Text style={{fontSize: 18}}>-</Text>
        </Pressable>

        <Text style={styles.num}>{props.person}</Text>

        <Pressable
          style={styles.button}
          onPress={() => props.handleCount(props.person + 1)}>
          <Text style={{fontSize: 18}}>+</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <Category
          title="Adults"
          subtext="Ages 13 or above"
          person={adults}
          handleCount={setAdults}
        />

        <Category
          title="Children"
          subtext="Ages 2 - 12"
          person={children}
          handleCount={setChildren}
        />

        <Category
          title="Infants"
          subtext="Under 2"
          person={infants}
          handleCount={setInfants}
        />
      </View>

      <Pressable
        style={styles.searchBtn}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {screen: 'SearchResult'},
          })
        }>
        <Text style={styles.searchTxt}>Search</Text>
      </Pressable>
    </View>
  );
}
