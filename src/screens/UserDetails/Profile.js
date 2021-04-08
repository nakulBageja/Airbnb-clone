import React, {Component} from 'react';
import {Card, Icon} from 'react-native-elements';
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import * as authActions from '../../../store/actions/auth';
import Email from './Email';
import Separator from './Separator';
import Tel from './Tel';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '900',
    paddingBottom: 8,
    textAlign: 'center',
  },
});

class Contact extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    tels: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  onPressPlace = () => {
    console.log('place');
  };

  onPressTel = (number) => {
    Linking.openURL(`tel://${number}`).catch((err) =>
      console.log('Error:', err),
    );
  };

  onPressSms = () => {
    console.log('sms');
  };

  onPressEmail = (email) => {
    Linking.openURL(
      `mailto://${email}?subject=subject&body=body`,
    ).catch((err) => console.log('Error:', err));
  };

  // renderLogoutButton = () => {
  //   return <Pressable onPress={() => console.log('logout')}>LOGOUT</Pressable>;
  // };

  renderHeader = () => {
    const {
      avatar,
      avatarBackground,
      name,
      address: {city, country},
    } = this.props;

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{uri: avatarBackground}}>
          <View style={styles.headerColumn}>
            <Image style={styles.userImage} source={{uri: avatar}} />
            <Text style={styles.userNameText}>{name} </Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {city} , {country}{' '}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  renderTel = () => (
    <FlatList
      contentContainerStyle={styles.telContainer}
      data={this.props.tels}
      renderItem={(list) => {
        const {id, name, number} = list.item;

        return (
          <Tel
            key={`tel-${id}`}
            index={list.index}
            name={name}
            number={number}
            onPressSms={this.onPressSms}
            onPressTel={this.onPressTel}
          />
        );
      }}
    />
  );

  renderEmail = () => (
    <FlatList
      contentContainerStyle={styles.emailContainer}
      data={this.props.emails}
      renderItem={(list) => {
        const {email, id, name} = list.item;

        return (
          <Email
            key={`email-${id}`}
            index={list.index}
            name={name}
            email={email}
            onPressEmail={this.onPressEmail}
          />
        );
      }}
    />
  );

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {this.renderTel()}
            {Separator()}
            {this.renderEmail()}
            <Pressable
              onPress={() => {
                this.props.logoutHelper();
                this.props.navigation.navigate('Home', {screen: 'Explore'});
              }}
              style={styles.button}>
              <Text style={styles.searchText}>LOGOUT </Text>
            </Pressable>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
//Connecting our global state counter property to components props
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userID: state.auth.userID,
    name: state.auth.name,
  };
};
//Connecting our global dispatcher to components props
const mapDispatchToProps = (dispatch) => {
  return {
    logoutHelper: () => dispatch({type: 'LOGOUT'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
//export default Contact;
