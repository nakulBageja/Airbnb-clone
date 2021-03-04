//Guest screen containing number of customers
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import GuestCounter from '../../components/GuestCounter';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
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
  );
};

export default GuestsScreen;
