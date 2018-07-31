export const EXECUTE_LOGIN_USER = 'EXECUTE_LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const loginUser = data => ({
    type: EXECUTE_LOGIN_USER,
    payload: data
})

export const logoutUser = user => ({
    type: LOGOUT_USER
})

export const fetchUserSuccess = userInfo => ({
    type: FETCH_USER_SUCCESS,
    payload: {
        userInfo
    }
});

export const fetchUserError = error => ({
    type: FETCH_USER_ERROR,
    payload: {
        error
    }
});