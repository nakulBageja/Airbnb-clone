import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import PostsList from '../../components/PostsList';

const SearchResultsScreen = () => {
  //   console.log(feed);
  return (
    <FlatList data={feed} renderItem={({item}) => <PostsList post={item} />} />
  );
};

export default SearchResultsScreen;
