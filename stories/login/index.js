import React from 'react';
import Login from '../../shared/components/login/login';
import { storiesOf, action, linkTo } from '@kadira/storybook';


storiesOf('Login', module)
  .add('Basic', () => (
    <Login />
  ));
