/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/Home/index';
const App: () => React$Node = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
