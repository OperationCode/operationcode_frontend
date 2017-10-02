import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IndexTable from 'shared/components/indexTable/indexTable';

function fetchFakeData() {
  return new Promise(
    resolve => setTimeout(
      () => resolve([
        { id: 1, fullName: 'James Bond', age: 36, profession: 'Developer' },
        { id: 2, fullName: 'John Snow', age: 28, profession: 'Team lead' },
        { id: 3, fullName: 'Methew Fraser', age: 25, profession: 'Frontend developer' },
      ])
    )
  );
}

storiesOf('shared/components/indexTable', module)
  .add('Default table', () => (
    <IndexTable
      heading="Command"
      fetchRecords={fetchFakeData}
      columns={[
        {
          Header: '#',
          accessor: 'id'
        },
        {
          Header: 'Full name',
          accessor: 'fullName'
        },
        {
          Header: 'Age',
          accessor: 'age'
        },
        {
          Header: 'Prefession',
          accessor: 'profession'
        }
      ]}
      onRowClick={action('row clicked')}
    />
  ));
