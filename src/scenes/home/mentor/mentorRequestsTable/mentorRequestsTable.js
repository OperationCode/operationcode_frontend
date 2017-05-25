import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MENTOR_REQUEST_COLUMNS } from 'shared/constants/table';
import * as ApiHelpers from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';
import RequestModal from 'scenes/home/requestModal/requestModal';

export default class MentorRequestsTable extends Component {
  state = {
    requests: [],
    mentors: [],
    activeRequest: false,
    authenticated: true
  }

  componentDidMount() {
    Promise.all([ApiHelpers.getRequests(), ApiHelpers.getMentors()])
    .then((data) => {
      this.setState({
        requests: data[0],
        mentors: data[1]
      });
    }).catch(this.setAuthFetchError);
  }

  setAuthFetchError = () => this.setState({ authenticated: false });

  buildMentorOptions = () =>
    this.state.mentors.map(mentor => ({ value: mentor.id, label: `${mentor.first_name} ${mentor.last_name}` }))

  handleModalClose = () => this.setState({ activeRequest: null });

  rowClickHandler = (request) => {
    const activeRequest = this.state.requests.find(x => x.id === request.id);
    this.setState({ activeRequest });
  }

  render() {
    const { authenticated, activeRequest } = this.state;
    if (!authenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div style={{ width: '100%' }} >
        <IndexTable
          heading="Pending Requests"
          columns={MENTOR_REQUEST_COLUMNS}
          onRowClick={this.rowClickHandler}
          fetchRecords={ApiHelpers.getRequests}
        />
        <RequestModal
          request={activeRequest}
          mentors={this.buildMentorOptions()}
          isOpen={!!activeRequest}
          onRequestClose={this.handleModalClose}
        />
      </div>
    );
  }
}
