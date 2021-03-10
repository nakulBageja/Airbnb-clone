import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducer/auth';
import ReduxThunk from 'redux-thunk';
const rootReducer = combineReducers({auth: authReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(ReduxThunk));
};

export default configureStore;
