import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import './shared/styles/normalize.global.css';
import './shared/styles/react-table.global.css';
import './shared/styles/react-select.global.css';
import './index.css';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
