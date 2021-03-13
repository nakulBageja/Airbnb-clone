import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import * as KeyChain from 'react-native-keychain';
const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Guests')}>
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonText}>Where are you going ? </Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.images}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Destination')}>
          <Text style={styles.buttonText}>Explore nearby stays </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
