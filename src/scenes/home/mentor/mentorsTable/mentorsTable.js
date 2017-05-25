import React, { Component } from 'react';
import { MENTOR_COLUMNS } from 'shared/constants/table';
import { getMentors } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';
import MentorDetails from 'scenes/home/mentor/mentorDetails/mentorDetails';

export default class MentorsTable extends Component {
  state = {
    activeMentor: null
  };

  rowClickHandler = (activeMentor) => {
    this.setState({ activeMentor });
  }

  handleModalClose = () => this.setState({ activeMentor: null });

  render() {
    const { activeMentor } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <IndexTable
          heading="Mentors"
          columns={MENTOR_COLUMNS}
          onRowClick={this.rowClickHandler}
          fetchRecords={getMentors}
          showPagination
        />
        <MentorDetails
          mentor={activeMentor}
          isOpen={!!activeMentor}
          onRequestClose={this.handleModalClose}
        />
      </div>
    );
  }
}
