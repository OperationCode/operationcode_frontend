import React from 'react';
import PropTypes from 'prop-types';

const FinancialReport = ({ url, name }) => <p><a href={url}>{name}</a></p>;

FinancialReport.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FinancialReport;
