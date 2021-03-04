import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

const App: () => React$Node = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="orange" barStyle="light-content" /> */}
      <Router />
    </>
  );
};

export default App;
