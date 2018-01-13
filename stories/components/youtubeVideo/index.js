import React from 'react';
import { storiesOf } from '@storybook/react';

import YouTube from 'shared/components/youtubeVideo/youtubeVideo';

storiesOf('shared/components/youtubeVideo', module)
  .add('Default', () => (
    <YouTube
      id="edMC6Wc3nsg"
      height="390"
      width="640"
    />
  ));
