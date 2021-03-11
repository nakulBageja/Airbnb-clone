//Login Screen

import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import * as userActions from '../../../store/actions/user';
//import {auth} from '../firebase';

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  //Check if error occurred
  useEffect(() => {
    if (error) {
      Alert.alert('Oops, something went wrong!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  //Handle sign in functionality
  const signInHandler = async () => {
    setIsLoading(true);
    Keyboard.dismiss();
    try {
      await dispatch(authActions.login(email, password));
      setEmail('');
      setPassword('');
      await dispatch(userActions.getUserDetails()); //fetch user details from Db
      navigation.replace('Home'); //go to home page
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text h3>Log In</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry //HELPS IN PROVIDING DOTS FOR PASSWORD
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signInHandler}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Button
          title="Login"
          onPress={signInHandler}
          containerStyle={styles.buttons}
          TouchableComponent={TouchableOpacity}
        />
      )}
      <Button
        type="outline"
        title="Register"
        containerStyle={styles.buttons}
        TouchableComponent={TouchableOpacity}
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{height: 120}} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
