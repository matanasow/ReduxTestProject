const defaultState = {
    userId: null,
      sessionId: null,
    error: null
  };
  
  export default (state = defaultState, { type, payload }) => {
    switch (type) {
  
              case `EXECUTE_LOGIN_USER`:
              return {
                  ...state,
          sessionId: payload.sessionId
              };
  
              case `LOGOUT_USER`:
              return {
                  ...state,
          sessionId: null
              };
  
              case `FETCH_USER_SUCCESS`:
              return {
                  ...state,
                  sessionId: payload.sessionId,
                  error: null
              };
  
              case `FETCH_USER_FAILURE`:
              return {
                  ...state,
                  sessionId: null,
                  error: payload.error
              };
  
          default:
               return state;
    }
  };
  