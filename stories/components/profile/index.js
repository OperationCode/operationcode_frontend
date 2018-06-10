import React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from 'scenes/home/profile/profile';
// import blocJpg from '../../asset/bloc.jpg';

storiesOf('scenes/home/profile', module)
  .add('Not Verified', () => <Profile />)
  .add('Verified', () => <Profile verified />);
