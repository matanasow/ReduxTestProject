import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './index.css';
import App from './App';
import 'moment/locale/bg';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const init = () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(init);

init();

registerServiceWorker();
