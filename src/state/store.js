import { createStore } from 'redux';
import login from './login/reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  login,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
