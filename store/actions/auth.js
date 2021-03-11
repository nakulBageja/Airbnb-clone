export const AUTH = 'AUTH';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authenticate = (token, userID) => {
  return {type: AUTH, token, userID};
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMaVGNL6AUp7jdGWIVMUofAhP-nakFJ38',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      },
    );

    //handling error messages according to error type
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({type: AUTH, token: resData.idToken, userID: resData.localId});

    //Logic to create the expiration date in ISO STRING
    const expirtationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000,
    ).toISOString();
    saveDataStorage(resData.idToken, resData.localId, expirtationDate);
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMaVGNL6AUp7jdGWIVMUofAhP-nakFJ38',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      },
    );
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong';
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found!';
      } else if (errorId === 'INVALID_PASSWORD') {
        message = 'This password is not valid!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({type: AUTH, token: resData.idToken, userID: resData.localId});
    //Logic to create the expiration date in ISO STRING
    const expirtationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000,
    ).toISOString();
    saveDataStorage(resData.idToken, resData.localId, expirtationDate);
  };
};

const saveDataStorage = async (token, userID, expirationDate) => {
  try {
    await AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        userID,
        token,
        expirationDate,
      }),
    );
  } catch (e) {
    // saving error
    console.log(e);
  }
};
