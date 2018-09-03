import {
    EXECUTE_LOGIN_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../actions/login'
// import axios from 'axios'

import {
    apiPostRequest
} from '../actions/api'


const URL = 'http://external.euroins.bg/nef4/service232/api/Users/Any?language=bg&method=Login';

export const fetchUser = ({dispatch}) => (next) => (action) => {
    if (action.type === EXECUTE_LOGIN_USER) {
        dispatch(apiPostRequest(URL, {
                username: action.payload.email,
                password: "0xa428e3fcc1f49164508bcdc08cfc7b43"
            }, FETCH_USER_SUCCESS, FETCH_USER_ERROR))
            // .then((response) => {
            //     console.log(response)
            //     dispatch(fetchUserSuccess(response))
            //     localStorage.setItem('sessionId', response.data.sessionId)
            // }).catch(error => {
            //     console.log(error)
            //     dispatch(fetchUserError(error))
            // })
            
    } else {
        next(action);
    }
}

export const loginMdl = [fetchUser];