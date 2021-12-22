import React from 'react';
import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post/index.js';
// import feed from '../../assets/data/feed.js';
import {supabase} from '../../../supabase';

export default function SearchResultPage() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const {data} = await supabase
        .from('posts')
        .select()
        .order('id', {ascending: true});
      // console.log(data);

      if (data) await setPosts(data);
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
