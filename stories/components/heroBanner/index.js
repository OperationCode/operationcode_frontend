import react from 'react';
import { storiesOf } from '@storybook/react';
import HeroBanner from 'shared/components/heroBanner/heroBanner';

import jamesBondJpg from '../../asset/james-bond.jpg';

storiesOf('HeroBanner', module).add('Default', () => (
  <HeroBanner imageSrc={jamesBondJpg} title="Bond" subtitle="James Bond" />
));
