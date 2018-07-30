const defaultState = {
  userId: null,
	sessionId: null,
  error: null	
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {

		case `SET_USER`:
			return {
				...state,
				userId: payload.userId,
        sessionId: payload.sessionId
			};

			case `EXECUTE_LOGIN_USER`:
			return {
				...state,
        sessionId: payload.userInfo.sessionId
			};

			case `LOGOUT_USER`:
			return {
				...state,
        sessionId: null
			};

			case `FETCH_USER_SUCCESS`:
			return {
				...state,
				sessionId: payload.userInfo.sessionId,
				error: null
			};

			case `FETCH_USER_FAILURE`:
			return {
				...state,
				sessionId: null,
				error: payload.error
			};

			case 'SHOW_NAME':
			return {
				...state,
				name: payload.name
			}

		default:
		 	return state;
  }
};
