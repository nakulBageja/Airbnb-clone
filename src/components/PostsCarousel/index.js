//component to display a post

import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const PostsCarousel = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();
  const showDetails = () => {
    navigation.navigate('PostDetail', {postID: post.id});
  };
  return (
    <Pressable
      onPress={showDetails}
      style={{...styles.container, width: width - 60}}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          style={styles.images}
          source={{
            uri: post.image,
          }}
        />
        <View style={{marginHorizontal: 10, flex: 1}}>
          {/* Bed and Bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} Bed {post.bedroom} Bedroom
          </Text>
          {/*  Type and description*/}
          <Text style={styles.description} numberOfLines={2}>
            {post.type} : {post.title}
          </Text>
          {/*  Old price and new price*/}
          <Text style={styles.pricing}>
            <Text style={styles.newPrice}>${post.newPrice}</Text> /night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostsCarousel;
