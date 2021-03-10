//This screen shows the registration form

import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import * as userActions from '../../../store/actions/user';
//import {auth} from '../firebase';
const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  //Check if error occurred
  useEffect(() => {
    if (error) {
      Alert.alert('Oops, something went wrong!', error, [{text: 'Okay'}]);
    }
  }, [error]);

  //Register user to firebase
  //Adding user's name and profile photo
  const register = async () => {
    setError(null);
    setIsLoading(true);
    Keyboard.dismiss();
    try {
      await dispatch(authActions.signUp(email, password));
      await dispatch(userActions.postUserDetails(name)); //add user details in database
      setEmail('');
      setPassword('');
      setName('');
      navigation.navigate('Explore'); //go to home page
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Button
          title="Register"
          onPress={register}
          containerStyle={styles.button}
          raised
          TouchableComponent={TouchableOpacity}
        />
      )}
      <View style={{height: 80}}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
