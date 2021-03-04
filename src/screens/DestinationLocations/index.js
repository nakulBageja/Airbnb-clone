import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import styles from './styles';
import destinationData from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
const DestinationLocationsScreen = () => {
  const [destinationInput, setDestinationInput] = useState('');

  const renderList = (item) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={25} />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Input field */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={destinationInput}
        onChangeText={setDestinationInput}
      />
      {/* List of locations */}
      <FlatList
        data={destinationData}
        renderItem={({item}) => renderList(item)}
      />
    </View>
  );
};

export default DestinationLocationsScreen;
