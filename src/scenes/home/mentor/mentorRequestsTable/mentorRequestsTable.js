import React, { Component } from 'react';
import { MENTOR_REQUEST_COLUMNS } from 'shared/constants/table';
import * as ApiHelpers from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';

export default class MentorRequestsTable extends Component {
  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row:', rowInfo);
    }
  })

  render() {
    return (
      <IndexTable
        heading="Pending Requests"
        columns={MENTOR_REQUEST_COLUMNS}
        onRowClick={this.rowClickHandler}
        fetchRecords={ApiHelpers.getRequests}
      />
    );
  }
}
