import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordian from 'shared/components/accordian/accordian';
import AccordianItem from 'shared/components/accordian/accordianItem/accordianItem';

storiesOf('shared/components/accordian', module)
  .add('Default', () => (
    <Accordian>
      <AccordianItem />
      <AccordianItem />
    </Accordian>
  ));
