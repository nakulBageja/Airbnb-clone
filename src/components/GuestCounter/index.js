//component displaying a row of counter of guests
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const GuestCounter = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontWeight: 'bold'}}>{props.title}</Text>
        <Text style={{color: '#8d8d8d'}}>{props.ageGroup}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable
          style={styles.button}
          onPress={() => {
            return props.setFunction(Math.max(0, props.value - 1));
          }}>
          <Text style={styles.symbol}>-</Text>
        </Pressable>
        <Text style={{fontSize: 16, marginHorizontal: 14}}>{props.value}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            return props.setFunction(props.value + 1);
          }}>
          <Text style={styles.symbol}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestCounter;
