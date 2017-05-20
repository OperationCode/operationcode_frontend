import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import ReactTable from 'react-table';
import Cookies from 'universal-cookie';
import config from 'config/environment';
import MENTOR_REQUEST_COLUMNS from 'shared/constants/table';
import Heading from 'shared/components/heading/heading';

class MentorRequestsTable extends Component {
  state = {
    requests: []
  }

  componentDidMount() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    axios.get(`${config.backendUrl}/requests`,
      { headers: { Authorization: `bearer ${token}` } }
    ).then(({ data }) => {
      this.setState({ requests: data });
    }).catch((response) => {
      const error = _.get(response, 'response.data.error');
      this.setState({ error });
    });
  }

  rowClickHandler = (state, rowInfo) => ({
    onClick: () => {
      console.log('It was in this row:', rowInfo);
    }
  })

  render() {
    const { requests } = this.state;
    return (
      <div style={{ width: '100%' }} >
        <Heading text="Pending Requests" style={{ margin: '4rem auto', lineHeight: 0 }} />
        <ReactTable data={requests} columns={MENTOR_REQUEST_COLUMNS} getTdProps={this.rowClickHandler} minWidth={1000} />
      </div>
    );
  }
}

export default MentorRequestsTable;
