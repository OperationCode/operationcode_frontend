import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormSelect from 'shared/components/form/formSelect/formSelect';


storiesOf('shared/components/form/formSelect', module)
  .add(
    'Default', () => (
      <FormSelect
        prompt="Select even"
        options={[
          { value: 0, label: 'Zero' },
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
          { value: 4, label: 'Four' },
          { value: 5, label: 'Five' },
          { value: 6, label: 'Six' },
          { value: 7, label: 'Seven' },
          { value: 8, label: 'Eight' },
          { value: 9, label: 'Nine' },
        ]}
        onChange={action('selected')}
      />
  ))
  .add('With validation func', () => (
    <FormSelect
      prompt="Select event number"
      options={[
        { value: 0, label: 'Zero' },
        { value: 1, label: 'One' },
        { value: 2, label: 'Two' },
        { value: 3, label: 'Three' },
        { value: 4, label: 'Four' },
        { value: 5, label: 'Five' },
        { value: 6, label: 'Six' },
        { value: 7, label: 'Seven' },
        { value: 8, label: 'Eight' },
        { value: 9, label: 'Nine' },
      ]}
      onChange={action('selected')}
      validationFunc={e => parseInt(e.target.value, 10) % 2 === 0}
    />
  ));