export const SET_USER = 'SET_USER';
export const EXECUTE_LOGIN_USER = 'EXECUTE_LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const setUser = id => ({
    type: SET_USER,
    payload: id
})

export const login = id => ({
    type: EXECUTE_LOGIN_USER,
    payload: id
})

export const logout = user => ({
    type: LOGOUT_USER
})

export const fetchUserSuccess = userInfo => ({
    type: FETCH_USER_SUCCESS,
    payload: {
        userInfo
    }
});

export const fetchUserError = error => ({
    type: FETCH_USER_FAILURE,
    payload: {
        error
    }
});

export function postUser() {
    return fetch('http://external.euroins.bg/nef4/service232/api/Users/Any?language=bg&method=Login', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.email,
                password: "0xa428e3fcc1f49164508bcdc08cfc7b43"
            })
        })
        .then(response => {
            debugger
            return response.json();
        })
        .then(
            result => {
                localStorage.setItem('sessionId', result.sessionId)
            }
        ),
        error => {
            return error;
        };
}

export function loadUser() {
    return dispatch => {
        return postUser().then(user => {
            debugger
                dispatch(fetchUserSuccess(user));
            }),
            error => {
                return error
            }
    }
}