import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MENTOR_COLUMNS } from 'shared/constants/table';
import { getMentors } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';

export default class MentorsTable extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  rowClickHandler = mentor => this.props.history.push(`/mentors/${mentor.id}`);

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
