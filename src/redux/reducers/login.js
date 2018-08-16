import {
  FETCH_USER_ERROR,
  EXECUTE_LOGIN_USER,
  FETCH_USER_SUCCESS,
  LOGOUT_USER
} from '../actions/login';

const defaultState = {
  userId: null,
  sessionId: null,
  error: null
};


export default (state = defaultState, {
  type,
  payload
}) => {
  debugger
  switch (type) {
    case EXECUTE_LOGIN_USER:
      return {
        ...state,
        email: payload.email,
        password: payload.password
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        sessionId: payload.sessionId,
        error: null
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        sessionId: null,
        error: payload.error
      };
    case LOGOUT_USER:
      return {
        ...state,
        sessionId: null,
        error: null
      }
    default:
      return state;
  }
};