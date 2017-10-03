import React from 'react';
import { HashRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Join from 'shared/components/join/join';

storiesOf('shared/components/join', module)
  .add('Default', () => (
    <HashRouter>
      <Join />
    </HashRouter>
  ));