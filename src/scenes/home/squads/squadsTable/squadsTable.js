import React, { Component } from 'react';
import { SQUAD_COLUMNS } from 'shared/constants/table';
import { getSquads } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';

export default class SquadsTable extends Component {
  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row:', rowInfo);
    }
  })

  render() {
    return (
      <IndexTable
        heading="Squads"
        columns={SQUAD_COLUMNS}
        onRowClick={this.rowClickHandler}
        fetchRecords={getSquads}
      />
    );
  }
}
