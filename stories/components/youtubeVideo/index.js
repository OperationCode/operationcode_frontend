import React from 'react';
import { storiesOf } from '@storybook/react';

import YouTube from 'shared/components/youtubeVideo/youtubeVideo';

storiesOf('shared/components/youtubeVideo', module)
  .add('Default', () => (
    <YouTube
      id=""
      height="390"
      width="640"
    />
  ));