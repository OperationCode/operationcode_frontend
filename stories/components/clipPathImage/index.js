import React from 'react';
import { storiesOf } from '@storybook/react';


import ClipPathImage from 'shared/components/clipPathImage/clipPathImage';

import jamesBondJpg from './james-bond.jpg';


storiesOf('shared/components/clipPathImage', module)
  .add('Default', () => (
    <ClipPathImage
      image={jamesBondJpg}
      title="James Bond"
    />
  ));