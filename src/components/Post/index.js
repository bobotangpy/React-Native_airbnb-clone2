import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import styles from './styles';

// PYRYEQ4YRFRV

export default function Post({post}) {
  const navigation = useNavigation();

  const goToDetaliedPost = () => {
    // console.log(post.id);
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    // <ScrollView>
    //   {posts?.map((post, i) => (
    <Pressable onPress={goToDetaliedPost} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedroom}>
        {post.bed} bed · {post.bedroom} bedroom
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
      </Text>

      <Text style={styles.totalPrice}>${Number(post.newPrice) * 5} total</Text>
    </Pressable>
    //   ))}
    // </ScrollView>
  );
}
