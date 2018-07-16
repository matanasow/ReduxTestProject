const defaultState = {
  userId: null,
  sessionId: null
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {

		case `SET_USER`:
			return {
				...state,
				userId: payload.userId,
        sessionId: payload.sessionId
			};

		default:
		 	return state;
  }
};
