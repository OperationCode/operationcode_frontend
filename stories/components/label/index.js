import React from 'react';
import { storiesOf } from '@storybook/react';

import Label from 'shared/components/label/label';

storiesOf('shared/components/label', module)
  .add('Default', () => (
    <div
      style={{
        marginTop: '12px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <input type="checkbox" id="check" />
      <Label
        htmlFor="check"
        style={{ marginLeft: '16px' }}
      >
        clickable
      </Label>
    </div>
  ));
