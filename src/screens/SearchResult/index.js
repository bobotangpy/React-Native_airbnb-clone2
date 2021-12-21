import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../assets/data/feed.js';
import Post from '../../components/Post/index.js';

export default function SearchResultPage() {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
