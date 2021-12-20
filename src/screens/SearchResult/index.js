import React from 'react';
import {View, FlatList} from 'react-native';
import Posts from '../../components/Post.js';
import feed from '../../assets/data/feed.json';
import Post from '../../components/Post.js';

export default function SearchResultPage() {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
