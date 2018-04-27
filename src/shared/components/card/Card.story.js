import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from './Card';

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('Card', () => (
    <Card
      cardHeaderClassName={text('cardHeaderClassName', '')}
      cardContentClassName={text('cardContentClassName', '')}
      cardFooterClassName={text('cardFooterClassName', '')}
      children={text('children', 'This is the content of the card.')}
      className={text('className', '')}
      headerContent={text('headerContent', '')}
      footerContent={text('footerContent', '')}
    />
  ));
