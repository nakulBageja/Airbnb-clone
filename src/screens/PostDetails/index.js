import React from 'react';
import {View, Text} from 'react-native';
import PostDetail from '../../components/PostDetail';
import places from '../../../assets/data/feed';
import {useRoute} from '@react-navigation/native';
const PostDetailsScreen = () => {
  const router = useRoute();
  const placeToDisplay = places.find(
    (place) => place.id === router.params.postID,
  );
  return (
    <View style={{backgroundColor: 'white'}}>
      <PostDetail post={placeToDisplay} />
    </View>
  );
};

export default PostDetailsScreen;
