import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Landing from '../../src/scenes/home/landing/landing';

storiesOf('Landing', module)
  .add('Basic', () => (
    <Landing />
  ));
