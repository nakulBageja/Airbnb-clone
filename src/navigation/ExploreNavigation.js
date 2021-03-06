//This navigation is for explore button in the bottom tabs.
//If it's clicked it will take up to the home page.
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/index';
import SearchResultsTabs from './SearchResultsTopTabNavigation';
const stack = createStackNavigator();
const ExploreNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="SearchResults"
        component={SearchResultsTabs}
        options={{
          title: 'Select your Stay',
        }}
      />
    </stack.Navigator>
  );
};

export default ExploreNavigation;
