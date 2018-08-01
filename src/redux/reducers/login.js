import { FETCH_USER_SUCCESS } from '../actions';

  const defaultState = {
    
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {

    case FETCH_USER_SUCCESS:
    return {
        ...state,
        sessionId: payload.sessionId,
        error: null
    };
    
        default:
             return state;
  }
};

  