//Guest screen containing number of customers
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import GuestCounter from '../../components/GuestCounter';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <GuestCounter
          title="Adults"
          ageGroup="Ages 16 or above"
          value={adults}
          setFunction={setAdults}
        />
        <GuestCounter
          title="Children"
          ageGroup="Ages 2 - 12"
          value={children}
          setFunction={setChildren}
        />
        <GuestCounter
          title="Infants"
          ageGroup="Under 2"
          value={infants}
          setFunction={setInfants}
        />
      </View>
      {/* Nested navigation to go searchResults navigation through explore tab */}
      <Pressable
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          });
        }}
        style={styles.button}>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
