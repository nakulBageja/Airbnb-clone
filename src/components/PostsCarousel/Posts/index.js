//component to display a post

import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import styles from './styles';

const PostsCarousel = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;
  return (
    <View style={{...styles.container, width: width - 60}}>
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
    </View>
  );
};

export default PostsCarousel;
