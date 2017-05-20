import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import { MENTOR_REQUEST_COLUMNS } from 'shared/constants/table';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Heading from 'shared/components/heading/heading';

class MentorRequestsTable extends Component {
  state = {
    requests: [],
    loggedIn: true
  }

  componentDidMount() {
    ApiHelpers.getRequests()
    .then((data) => {
      this.setState({ requests: data });
    }).catch(this.setFetchError);
  }

  setFetchError = ({ response }) => {
    // The 500 means you the user is not a mentor, should
    // update that later
    if (response.status === 401 || response.status === 500) {
      this.setState({ loggedIn: false });
    }
  }

  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row:', rowInfo);
    }
  })

  render() {
    const { loggedIn, requests } = this.state;
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div style={{ width: '100%' }} >
        <Heading text="Pending Requests" style={{ margin: '4rem auto', lineHeight: 0 }} />
        <ReactTable data={requests} columns={MENTOR_REQUEST_COLUMNS} getTdProps={this.rowClickHandler} minWidth={1000} />
      </div>
    );
  }
}

export default MentorRequestsTable;
