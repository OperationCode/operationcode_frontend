import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import FormZipCode from 'shared/components/form/formZipCode/formZipCode';


storiesOf('shared/components/form/formZipCode', module)
  .add('Default', () => (
    <FormZipCode
      label="Zip code"
      onChange={action('zip code changed')}
    />
  ));

