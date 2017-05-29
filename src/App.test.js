import React from 'react';
import sinon from 'sinon';
import ReactDOM from 'react-dom';
import * as CookieHelpers from 'shared/utils/cookieHelper';
import App from './App';

it('renders without crashing', () => {
  sinon.stub(CookieHelpers, 'getUserStatus').returns({
    signedIn: true,
    mentor: true
  });
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
