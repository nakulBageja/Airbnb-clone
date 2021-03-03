import React from 'react';
import HomeScreen from './src/screens/Home/index';
import SearchResultsScreen from './src/screens/SearchResults/index';

import {StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      {/* <HomeScreen /> */}
      <SearchResultsScreen />
    </>
  );
};

export default App;
