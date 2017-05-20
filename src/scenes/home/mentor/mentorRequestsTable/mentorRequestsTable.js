import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { MENTOR_REQUEST_COLUMNS } from 'shared/constants/table';
import * as ApiHelpers from 'shared/utils/apiHelper';
import IndexTable from 'shared/components/indexTable/indexTable';

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
      <IndexTable
        heading="Pending Requests"
        data={requests}
        columns={MENTOR_REQUEST_COLUMNS}
        onRowClick={this.rowClickHandler}
      />
    );
  }
}

export default MentorRequestsTable;
