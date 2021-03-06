//Login Screen

import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
//import {auth} from '../firebase';

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //If user has logged in move to home screen
  //   useEffect(() => {
  //     console.log('LOGIN SCREEN');
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //       if (authUser) {
  //         navigation.replace('HOME');
  //       }
  //     });

  //     return unsubscribe; //We want to login once and keep the user logged in if he refreshes the page
  //   }, []);

  //Handle sign in functionality
  const signInHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) =>
        Alert.alert('Login Error', error.message, [{text: 'Okay'}]),
      );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={100}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.Image}
      />
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
      <Button
        title="Login"
        onPress={signInHandler}
        containerStyle={styles.buttons}
        TouchableComponent={TouchableOpacity}
      />
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
