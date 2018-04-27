import React from 'react';
import { storiesOf } from '@storybook/react';

import BoardCard from 'shared/components/boardCard/boardCard';

import jamesBondJpg from '../../asset/james-bond.jpg';

storiesOf('shared/components/boardCard', module).add('Default', () => (
  <BoardCard
    name="James Bond"
    src={jamesBondJpg}
    description="Sometimes played by Pierce Brosnan, Sean Connery, and multiple other talented actors. Always gets the girl."
    role="developer"
  />
));
