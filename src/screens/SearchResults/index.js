import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Posts from '../../components/Posts';

const SearchResultsScreen = () => {
  //   console.log(feed);
  return (
    <FlatList data={feed} renderItem={({item}) => <Posts post={item} />} />
  );
};

export default SearchResultsScreen;
