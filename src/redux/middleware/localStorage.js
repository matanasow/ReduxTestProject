import {SET_LOCAL_STORAGE_PROP} from '../actions/localStorage'

export const setLocalStorageProps = ({dispatch}) => (next) => (action) => {
    if (action.type === SET_LOCAL_STORAGE_PROP) {
        
    } else {
        next(action);
    }
}