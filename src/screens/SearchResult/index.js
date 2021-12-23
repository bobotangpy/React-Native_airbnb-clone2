import React from 'react';
import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post/index.js';
// import feed from '../../assets/data/feed.js';
import {supabase} from '../../../supabase';

export default function SearchResultPage({guests, viewport}) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // console.log('viewport:::', viewport);
    fetchPosts();
  }, []);

  const filterLocations = data => {
    let loc = data.filter(
      place =>
        place.latitude < viewport.northeast.lat &&
        place.latitude > viewport.southwest.lat &&
        place.longitude < viewport.northeast.lng &&
        place.longitude > viewport.southwest.lng,
    );
    // console.log('LOCATIONS:::', loc);
    return loc;
  };

  const fetchPosts = async () => {
    try {
      const {data} = await supabase
        .from('posts')
        .select()
        .order('id', {ascending: true});
      // console.log(data);

      // guests > 3 -> show bed >= 2
      if (data && guests) {
        if (guests > 3) {
          let filteredData = data.filter(post => post.bed >= 2);

          // filter results based on viewport(lat & lng)
          let filteredLoc = filterLocations(filteredData);

          await setPosts(filteredLoc);
        } else {
          let filteredData = data.filter(post => post.bed < 2);

          // filter results based on viewport(lat & lng)
          let filteredLoc = filterLocations(filteredData);

          await setPosts(filteredLoc);
        }
      } else if (data) {
        await setPosts(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      {posts && (
        <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
      )}
    </View>
  );
}
