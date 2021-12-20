import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';

const results = [
  {
    id: '0',
    location: 'Lower Manhattan, NY',
  },
  {
    id: '1',
    location: 'Upper Manhattan, NY',
  },
  {
    id: '2',
    location: 'West Manhattan, NY',
  },
  {
    id: '3',
    location: 'North Manhattan, NY',
  },
  {
    id: '4',
    location: 'East Manhattan, NY',
  },
];

export default function DestinationSearchPage() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  // const Rows = ({item}) => (
  //   <View>
  //     <View style={styles.iconContainer}>
  //       <Entypo name={'location-pin'} size={25} />
  //     </View>
  //     <Text style={styles.locationText}>{item.location}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details) => {
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        query={{
          key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
          language: 'en',
          type: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={item => <Rows item={item} />}
      /> */}

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {inputText?.length > 0 && (
        <FlatList
          data={results}
          renderItem={({item}) => (
            <Pressable
              style={styles.row}
              onPress={() => {
                setInputText(item.location);
                setTimeout(() => {
                  navigation.navigate('Guests');
                }, 200);
              }}>
              <View style={styles.iconContainer}>
                <Entypo name={'location-pin'} size={25} />
              </View>
              <Text style={styles.locationText}>{item.location}</Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
