import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/core';
import DetailedPost from '../../components/DetailedPost';

import places from '../../assets/data/feed';

export default function PostScreen() {
  const route = useRoute();
  // console.log('route param', route.params.postId);
  let post;
  places.find(place => {
    if (place.id == route.params.postId) {
      // console.log('place id:::', place.id);
      post = place;
    }
  });
  // console.log(post);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
}
