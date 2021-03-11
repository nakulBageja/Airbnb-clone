import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthAction from '../../../store/actions/auth';
import * as userActions from '../../../store/actions/user';
import styles from './styles';
const StartUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const tryLogin = async () => {
      //Get user details
      const userData = await AsyncStorage.getItem('userData');

      //If user is not present
      if (!userData) {
        navigation.replace('Home');
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token, userID, expirationDate} = transformedData;
      const expiryDate = new Date(expirationDate);

      //check if the token has expired or not
      if (expiryDate <= new Date() || !token || !userID) {
        navigation.replace('Home');
        return;
      }

      //Add the token and userID to redux
      dispatch(AuthAction.authenticate(token, userID));
      await dispatch(userActions.getUserDetails()); //fetch user details from Db
      navigation.replace('Home');
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default StartUp;
