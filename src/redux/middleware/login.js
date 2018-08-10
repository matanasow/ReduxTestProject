import { FETCH_USER_SUCCESS, loginUser, FETCH_USER_ERROR } from '../actions/login'

import { apiRequest } from '../actions/api'

const URL = 'http://external.euroins.bg/nef4/service232/api/Users/Any?language=bg&method=Login';

export const fetchUser =  ({dispatch}) => (next) => (action) => {
    debugger
    if (action.type === FETCH_USER_SUCCESS) {
        debugger
        dispatch(loginUser(action.payload));
        dispatch(apiRequest('POST', URL, action.payload, FETCH_USER_SUCCESS, FETCH_USER_ERROR));
        // fImpl(action.payload.url);
    } else {
        next(action);
    }
}

export const loginMdl = [fetchUser];