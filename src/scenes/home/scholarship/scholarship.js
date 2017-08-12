import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Scholarship extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Link to={`/scholarships/${this.props.match.params.id}/apply`}>Apply</Link>
      </div>
    );
  }
}

Scholarship.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
};

export default Scholarship;
