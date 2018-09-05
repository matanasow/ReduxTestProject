import { setLocalStorageProps } from './localStorage'
import { fetchUser } from './login'
import { apiPost } from './api'

const middlewares = [setLocalStorageProps, fetchUser, apiPost];

export default middlewares;
