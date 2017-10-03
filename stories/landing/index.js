import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { storiesOf } from '@storybook/react';

import Landing from 'scenes/home/landing/landing';

const history = createHistory();

storiesOf('Landing', module)
  .add('Basic', () => (
    <Router history={history}>
      <Landing />
    </Router>
  ));
