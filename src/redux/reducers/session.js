// import {
//   FETCH_USER_ERROR,
//   EXECUTE_LOGIN_USER,
//   FETCH_USER_SUCCESS,
//   LOGOUT_USER
// } from '../actions/login';

const defaultState = {
  userId: null,
	sessionId: null,
  error: null	
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    // case EXECUTE_LOGIN_USER:
    // console.log('REDUCER IN')
    //   return {
    //     ...state,
    //     email: payload.data.email,
    //     password: payload.data.password
    //   }
    // case FETCH_USER_SUCCESS:
    //   return {
    //     ...state,
    //     sessionId: payload.data.sessionId,
    //     error: null
    // //   };
    // case FETCH_USER_ERROR:
    //   return {
    //     ...state,
    //     sessionId: null,
    //     error: payload.error
    //   };
    // case LOGOUT_USER:
    //   return {
    //     ...state,
    //     sessionId: null,
    //     error: null
    //   }
    default:
      return state;
  }
};
