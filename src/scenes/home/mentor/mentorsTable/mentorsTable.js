import React, { Component } from 'react';
import { MENTOR_COLUMNS } from 'shared/constants/table';
import { getMentors } from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';
import MentorDetails from 'scenes/home/mentor/mentorDetails/mentorDetails';

export default class MentorsTable extends Component {
  state = {
    activeMentorId: false
  };

  rowClickHandler = (mentor) => {
    this.setState({ activeMentorId: mentor.id });
  }

  handleModalClose = () => this.setState({ activeMentorId: null });

  render() {
    const { activeMentorId } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <IndexTable
          heading="Mentors"
          columns={MENTOR_COLUMNS}
          onRowClick={this.rowClickHandler}
          fetchRecords={getMentors}
          showPagination={!activeMentorId}
        />
        <MentorDetails
          mentorId={activeMentorId}
          isOpen={!!activeMentorId}
          onRequestClose={this.handleModalClose}
        />
      </div>
    );
  }
}
