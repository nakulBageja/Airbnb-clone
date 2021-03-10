//Get action type
import {AUTH} from '../actions/auth';

const initialState = {
  token: null,
  userID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        token: action.token,
        userID: action.userID,
      };
    default:
      return state;
  }
};
