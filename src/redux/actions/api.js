export const API_REQUEST = '[app] API_request';

export const apiRequest = (method, url, body ,onSuccess, onError) => ({
    type: API_REQUEST,
    payload: body,
    meta: {method, url, onSuccess, onError}
})