import React from 'react';
import { storiesOf } from '@storybook/react';

import QuoteBanner from 'shared/components/quoteBanner/quoteBanner';

storiesOf('shared/components/quoteBanner', module)
  .add('Default', () => (
    <QuoteBanner
      author="James bond"
      quote="I always enjoyed learning a new tongue"
    />
  ));
