import { async } from './asyncs'
const middlewares = [async(fetch())];

export default middlewares;
