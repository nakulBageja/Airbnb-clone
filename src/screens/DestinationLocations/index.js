import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const DestinationLocationsScreen = () => {
  const [destinationInput, setDestinationInput] = useState('');
  const navigation = useNavigation();
  const renderList = (item) => {
    return (
      //     {/* List of locations */}
      // <Pressable
      //   onPress={() => {
      //     navigation.navigate('Guests');
      //   }}>
      <View style={styles.listContainer}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={25} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
      </View>
      //    </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          navigation.navigate('Guests');
          //console.log(data, details);
        }}
        fetchDetails //To get more information of that place
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyBMaVGNL6AUp7jdGWIVMUofAhP-nakFJ38',
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles //This is added to remove default styles
        renderRow={(item) => renderList(item)}
      />
    </View>
  );
};

export default DestinationLocationsScreen;
