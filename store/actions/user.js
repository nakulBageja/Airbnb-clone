export const GET_USER = 'GET_USER';

//Post user details
export const postUserDetails = (name) => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const response = await fetch(
      `https://prime-amulet-306806-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name,
        }),
      },
    );

    //handling error messages according to error type
    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData);
      const errorId = errorResData.error.message;
      let message = 'Something went wrong';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({type: GET_USER});
  };
};

//Get user details
export const getUserDetails = () => {
  return async (dispatch, getState) => {
    const userID = getState().auth.userID;
    const response = await fetch(
      `https://prime-amulet-306806-default-rtdb.firebaseio.com/users/${userID}.json`,
    );

    //handling error messages according to error type
    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData);
      const errorId = errorResData.error.message;
      let message = 'Something went wrong';
      if (errorId === 'EMAIL_EXISTS') {
        message = 'This email exists already!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({type: GET_USER});
  };
};
