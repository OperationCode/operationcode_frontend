import React from 'react';
import { storiesOf } from '@storybook/react';

import SchoolCard from 'shared/components/schoolCard/schoolCard';
import blocJpg from '../../asset/bloc.jpg';

storiesOf('shared/components/schoolCard', module)
  .add('Default', () => (
    <SchoolCard
      alt="Coder Camps Logo"
      schoolName="Coder Camps"
      link="http://www.operationcodercamps.com/"
      schoolAddress="Online, Pheonix, Seattle"
      logo={blocJpg}
      GI="No"
      fullTime="Full-Time"
      hardware="No"
    />
  ));