import { combineReducers } from 'redux';
import session from './session';
import data from './data'
import login from './login'


export default combineReducers({
  login,
  session,
  data
});