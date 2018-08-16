import { EXECUTE_LOGIN_USER, fetchUserSuccess, fetchUserError } from '../actions/login'
import axios from 'axios'

import { apiRequest } from '../actions/api'


const URL = 'http://external.euroins.bg/nef4/service232/api/Users/Any?language=bg&method=Login';

export const fetchUser =  (store) => (next) => (action) => {
    debugger
if (action.type === EXECUTE_LOGIN_USER) {
    axios.post(URL,
            {
                username: action.payload.username,
                password: "0xa428e3fcc1f49164508bcdc08cfc7b43"
            })
        .then((response) => {
            console.log(response)
            fetchUserSuccess(response)
            localStorage.setItem('sessionId', response.sessionId)
        }),
        error => {
            console.log(error)
            fetchUserError(error)
        }
    } else {
        next(action);
    }
}

export const loginMdl = [fetchUser];