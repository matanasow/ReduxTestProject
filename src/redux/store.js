import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers/';
import middlewares from './middleware/';

export default createStore(
  reducers,
  applyMiddleware(
    ...middlewares,
    createLogger({ collapsed: true })
  )
);
