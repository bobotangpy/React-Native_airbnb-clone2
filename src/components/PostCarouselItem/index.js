import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

export default function PostCarouselItem({post}) {
  const width = useWindowDimensions.apply().width;
  const navigation = useNavigation();

  const goToDetailedPost = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToDetailedPost}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.bedroom}>
            {post.bed} bed · {post.bedroom} bedroom
          </Text>
          <Text style={styles.desc} numberOfLines={2}>
            {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
