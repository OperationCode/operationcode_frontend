import React from 'react';
import { storiesOf } from '@storybook/react';

import Drawer from 'shared/components/drawer/drawer';


storiesOf('shared/components/Drawer', module)
  .add('Default', () => (
    <Drawer>
      <span>Something</span>
    </Drawer>
  ))
  .add('Visible', () => (
    <Drawer isVisible>
      <span>Something</span>
    </Drawer>
  ));