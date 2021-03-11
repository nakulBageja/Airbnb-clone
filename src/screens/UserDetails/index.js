import React from 'react';

import contactData from './contact.json';
import {useNavigation} from '@react-navigation/native';
import Profile from './Profile';

const UserDetailsScreen = () => {
  const navigation = useNavigation();
  return <Profile {...contactData} navigation={navigation} />;
};

// UserDetailsScreen.propTypes = {
//   navigation: PropTypes.object.isRequired,
// }

export default UserDetailsScreen;
