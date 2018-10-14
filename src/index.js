import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import '@fortawesome/fontawesome/styles.css';
import App from './App';
import './shared/styles/normalize.global.css';
import './shared/styles/react-select.global.css';
import './shared/styles/notifications.global.css';
import './index.css';

Raven.config('https://6350058c0b0247bf8923b9965ca744fa@sentry.io/222621').install();

ReactDOM.render(<App />, document.getElementById('root'));
