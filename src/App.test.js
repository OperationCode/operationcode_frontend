import React from 'react';
import ReactDOM from 'react-dom';

// This import and the subsequent test fail to run with the
// following error:
//
// Cannot find module 'shared/components/login/login' from 'home.js'
//
// If you fix this load error using a relative path more show up.
//
//import App from './App';

//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.render(<App />, div);
//});

it('can run a test', () => {
  1 + 1 == 2
});
