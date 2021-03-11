import React from 'react';

import contactData from './contact.json';

import Profile from './Profile';

const UserDetailsScreen = () => <Profile {...contactData} />;

// UserDetailsScreen.propTypes = {
//   navigation: PropTypes.object.isRequired,
// }

export default UserDetailsScreen;
