import React, { Component } from 'react';
import { MENTOR_COLUMNS } from 'shared/constants/table';
import { getMentors } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';

export default class MentorsTable extends Component {
  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row:', rowInfo);
    }
  })

  render() {
    return (
      <IndexTable
        heading="Mentors"
        columns={MENTOR_COLUMNS}
        onRowClick={this.rowClickHandler}
        fetchRecords={getMentors}
      />
    );
  }
}
