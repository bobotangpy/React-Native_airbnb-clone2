/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/core';

export default function GuestScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const changeScreen = () => {
    if (adults > 0) {
      navigation.navigate('Home', {
        screen: 'Explore',
        params: {
          screen: 'SearchResult',
          params: {guests: adults + children, viewport: route.params.viewport},
        },
      });
    } else setShowWarning(true);
  };

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

        {showWarning && (
          <Text style={styles.warning}>
            Minimum number of adult guest is 1.
          </Text>
        )}
      </View>

      <Pressable style={styles.searchBtn} onPress={changeScreen}>
        <Text style={styles.searchTxt}>Search</Text>
      </Pressable>
    </View>
  );
}
