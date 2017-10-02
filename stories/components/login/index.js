import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';
import { storiesOf } from '@storybook/react';

import Login from 'shared/components/login/login';

const history = createHistory();

storiesOf('shared/components/login', module)
  .add('Basic', () => (
    <Router history={history}>
      <Login />
    </Router>
  ));
