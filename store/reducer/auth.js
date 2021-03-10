//Get action type
import {AUTH} from '../actions/auth';
import {USER_DETAILS} from '../actions/user';
const initialState = {
  token: null,
  userID: null,
  name: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        token: action.token,
        userID: action.userID,
      };
    case USER_DETAILS:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
