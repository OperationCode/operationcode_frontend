import React from 'react';
import { storiesOf } from '@storybook/react';

import jamesBondJpg from '../../asset/james-bond.jpg';
import StaffCard from 'shared/components/staffCard/staffCard';


storiesOf('shared/components/staffCard', module)
  .add('Default', () => (
    <StaffCard
      name="James Bond"
      src={jamesBondJpg}
      alt="james-bond"
      role="Developer"
      twitter="@JamesBond007"
      email="james.bond@fake-gmail.com"
    />
  ));