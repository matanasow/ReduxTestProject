import {API_POST_REQUEST} from '../actions/api'
import {API_GET_REQUEST} from '../actions/api'
import axios from 'axios'

export const apiGet = ({dispatch}) => next => action => {

    if(action.type === API_GET_REQUEST){
        debugger
        const {url, params, onSuccess, onError} = action.meta;
        axios.get(url).then(response => response.json())
        .then((data) => dispatch({ type: onSuccess, payload: data }))
        .catch(error => dispatch({ type: onError, payload: error}))
    }
    return next(action)
}

export const apiPost = ({dispatch}) => next => action => {

    if(action.type === API_POST_REQUEST){
        debugger
        const {url, onSuccess, onError} = action.meta;
        axios.post(url, action.payload)
        .then((data) => dispatch({ type: onSuccess, payload: data }))
        .catch((error) => dispatch({ type: onError, payload: error.response.data.ex}))
    }
    return next(action)
}
