import React from 'react';
import { storiesOf } from '@storybook/react';

import BoardCard from 'shared/components/boardCard/boardCard';

import jamesBondJpg from '../../asset/james-bond.jpg';

storiesOf('shared/components/boardCard', module)
  .add('Default', () => (
    <BoardCard
      name="James Bond"
      src={jamesBondJpg}
      alt="james-bond"
      role="developer"
    />
  ));
