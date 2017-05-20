import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from 'shared/components/heading/heading';
import ReactTable from 'react-table';

export default class IndexTable extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.object).isRequired,
    heading: PropTypes.string.isRequired,
    onRowClick: PropTypes.func,
    fetchRecords: PropTypes.func.isRequired
  };

  static defaultProps = {
    onRowClick: () => {}
  };

  state = {
    loggedIn: true,
    data: []
  };

  componentDidMount() {
    this.props.fetchRecords().then((data) => {
      this.setState({ data });
    }).catch(this.setFetchError);
  }

  setFetchError = (err) => {
    const response = err.response;
    // The 500 means you the user is not a mentor, should
    // update that later
    if (response.status === 401 || response.status === 500) {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div style={{ width: '100%' }}>
        <Heading
          text={this.props.heading}
          style={{ margin: '4rem auto', lineHeight: 0 }}
        />
        <ReactTable
          data={this.state.data}
          columns={this.props.columns}
          getTdProps={this.props.onRowClick}
          minWidth={1000}
        />
      </div>
    );
  }
}
