import React, {useState, useEffect, useRef} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {FlatList} from 'react-native-gesture-handler';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
// import places from '../../assets/data/feed.js';
import {supabase} from '../../../supabase';

export default function SearchResultMap() {
  const [posts, setPosts] = useState();
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatList = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  // ↓↓↓ scroll the list => change the highlighted price tag on map
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      let selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts && flatList && selectedPlaceId) {
      let index = posts.findIndex(item => item.id === selectedPlaceId);

      flatList.current.scrollToIndex({index});

      // ↓↓↓ scroll the list => move to the highlighted price tag on map
      let selectedPlace = posts[index];
      // Get the region to zoom in
      let region = {
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1,
      };
      map.current.animateToRegion(region);
    }
  }, [selectedPlaceId, posts]);

  const fetchPosts = async () => {
    try {
      const {data} = await supabase
        .from('posts')
        .select()
        .order('id', {ascending: true});
      console.log(data[0]);

      if (data) await setPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 40.74061,
          longitude: -74,
          latitudeDelta: 0.2,
          longitudeDelta: 0.1,
        }}>
        {posts?.map((place, i) => (
          <CustomMarker
            key={i}
            coordinates={{latitude: place.latitude, longitude: place.longitude}}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment="center"
          decelerationRate="fast"
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
}
