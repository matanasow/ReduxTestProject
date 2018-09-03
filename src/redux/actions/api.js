export const API_POST_REQUEST = '[app] API_POST_request';
export const API_GET_REQUEST = '[app] API_GET_request';

export const apiPostRequest = (url, body, onSuccess, onError) => ({
    type: API_POST_REQUEST,
    payload: body,
    meta: {url, onSuccess, onError}
})

export const apiGetRequest = (url, params, onSuccess, onError) => ({
    type: API_GET_REQUEST,
    payload: params,
    meta: {url, onSuccess, onError}
})