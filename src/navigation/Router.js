import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import HomeTabsNavigator from './HomeTabsNavigator';
import DestinationLocationsScreen from '../screens/DestinationLocations';
import GuestsScreen from '../screens/Guests';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabsNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Destination"
          component={DestinationLocationsScreen}
          options={{
            title: 'Select your Destination',
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
        <Stack.Screen
          name="Accomodations"
          component={SearchResultsScreen}
          options={{
            title: 'Select your Stay',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
