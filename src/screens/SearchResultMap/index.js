import React, {useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FlatList} from 'react-native-gesture-handler';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
import places from '../../assets/data/feed.js';

export default function SearchResultMap() {
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState();

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 40.74061,
          longitude: -74,
          latitudeDelta: 0.2,
          longitudeDelta: 0.1,
        }}>
        {places.map((place, i) => (
          <CustomMarker
            key={i}
            coordinates={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
        />
      </View>
    </View>
  );
}
