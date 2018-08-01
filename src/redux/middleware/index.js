import { async } from './asyncs'
import { fetchUser } from './login'
import { api } from './api'

const middlewares = [async, fetchUser, api];

export default middlewares;
