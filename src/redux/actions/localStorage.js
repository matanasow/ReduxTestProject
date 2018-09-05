export const SET_LOCAL_STORAGE_PROP = 'SET_LOCAL_STORAGE_PROP';

export const setLocalStorageProp = props => ({
type: SET_LOCAL_STORAGE_PROP,
payload: {
    props: props
}

})