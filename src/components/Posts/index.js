//component to display a post

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Posts = (props) => {
  const post = props.post;
  console.log('post' + post);
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.images}
        source={{
          uri: post.image,
        }}
      />
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
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> /night
      </Text>
      {/*  Total price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Posts;
