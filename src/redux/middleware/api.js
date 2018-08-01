import {API_REQUEST} from '../actions/api'

export const api = ({dispatch}) => next => action => {

    if(action.type === API_REQUEST){
        debugger
        const {method, url, onSuccess, onError} = action.meta;
        const body = action.payload
        fetch(url, {method, body}).then(response => response.json())
        .then((data) => dispatch({ type: onSuccess, payload: data }))
        .catch(error => dispatch({ type: onError, payload: error}))
    }
    return next(action)
}