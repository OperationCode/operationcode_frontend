import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageCard from 'shared/components/imageCard/imageCard';
import jamesBondJpg from '../../asset/james-bond.jpg';

storiesOf('shared/components/imageCard', module)
  .add('Default', () => (
    <ImageCard
      image={jamesBondJpg}
      title="James Bond"
      cardText="Hello World"
      buttonText="Link"
      link="http://google.com"
    />
  ));