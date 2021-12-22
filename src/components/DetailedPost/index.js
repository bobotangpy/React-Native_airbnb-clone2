import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

export default function DetailedPost({post}) {
  return (
    <ScrollView>
      {/* {posts?.map((post, i) => ( */}
      <View style={styles.container}>
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
          {post.description}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice} </Text>
          <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
        </Text>

        <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        <Text style={styles.details}>{post.description}</Text>
      </View>
      {/* ))} */}
    </ScrollView>
  );
}
