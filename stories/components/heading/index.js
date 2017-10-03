import React from 'react';
import { storiesOf } from '@storybook/react';


import Heading from 'shared/components/heading/heading';


storiesOf('shared/components/heading', module)
  .add('Default', () => (
    <Heading
      text="Hello World"
    />
  ))
  .add('Without heading lines', () => (
    <Heading
      text="Hello world"
      headingLines={false}
    />
  ))
  .add('White theme', () => (
    <div style={{ background: '#000' }}>
      <Heading
        text="Hello world"
        theme="white"
      />
    </div>
  ));