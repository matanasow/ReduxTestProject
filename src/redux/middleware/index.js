import { async } from './asyncs'
import { fetchUser } from './login'
import { apiPost } from './api'

const middlewares = [async, fetchUser, apiPost];

export default middlewares;
