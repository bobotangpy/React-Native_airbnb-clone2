import React from 'react';
import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post/index.js';
// import feed from '../../assets/data/feed.js';
import {supabase} from '../../../supabase';

export default function SearchResultPage({guests}) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    console.log('guests:::', guests);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const {data} = await supabase
        .from('posts')
        .select()
        .order('id', {ascending: true});
      // console.log(data);

      // guests > 3 -> show bed >= 2
      if (data) {
        if (guests > 3) {
          // let filteredData = [];
          let filteredData = data.filter(post => post.bed >= 2);
          await setPosts(filteredData);
        } else {
          let filteredData = data.filter(post => post.bed < 2);
          await setPosts(filteredData);
        }
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
