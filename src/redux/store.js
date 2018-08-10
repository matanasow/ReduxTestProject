import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers/';
import middlewares from './middleware/index';
import thunk from 'redux-thunk';

export default createStore(
  reducers,
  applyMiddleware(thunk,
    ...middlewares,
    createLogger({ collapsed: true })
  )
);
