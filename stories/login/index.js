import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';

import Login from 'shared/components/login/login';
import { storiesOf } from '@storybook/react';

const history = createHistory();

storiesOf('Login', module)
  .add('Basic', () => (
    <Router history={history}>
      <Login />
    </Router>
  ));
