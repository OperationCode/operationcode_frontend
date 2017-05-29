import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FinancialReport extends Component {
  render() {
    return (
      <p><a href={this.props.url}>{this.props.name}</a></p>
    );
  }
}

FinancialReport.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FinancialReport;
