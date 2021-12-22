import React from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/core';

import places from '../../assets/data/feed';

export default function PostScreen() {
  const route = useRoute();
  // console.log(route.params.postId);
  let post = places.find(place => place.id === route.params.postId);
  // console.log(post);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <DetailedPost post={post} />
    </View>
  );
}
