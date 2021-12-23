import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Entypo from 'react-native-vector-icons/Entypo';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';

const results = [
  {
    id: '0',
    location: 'Lower Manhattan, NY',
    viewport: {
      northeast: {lat: 40.7137087, lng: -74.012287},
      southwest: {lat: 40.7127753, lng: -74.0059728},
    },
  },
  {
    id: '1',
    location: 'Upper Manhattan, NY',
    viewport: {
      northeast: {lat: 40.7740549, lng: -73.9830616},
      southwest: {lat: 40.7127753, lng: -74.0059728},
    },
  },
  {
    id: '2',
    location: 'West Manhattan, NY',
    viewport: {
      northeast: {lat: 40.737353, lng: -74.0100983},
      southwest: {lat: 40.7127753, lng: -74.0059728},
    },
  },
  {
    id: '3',
    location: 'North Manhattan, NY',
    viewport: {
      northeast: {lat: 40.7740549, lng: -73.9830616},
      southwest: {lat: 40.7127753, lng: -74.0059728},
    },
  },
  {
    id: '4',
    location: 'East Manhattan, NY',
    viewport: {
      northeast: {lat: 40.7040469, lng: -73.9826754},
      southwest: {lat: 40.7127753, lng: -74.0059728},
    },
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
                  navigation.navigate('Guests', {viewport: item.viewport});
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
