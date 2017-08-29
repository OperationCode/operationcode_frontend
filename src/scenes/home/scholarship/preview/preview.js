import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './preview.css';

class Preview extends Component {
  snip = (description) => {
    const str = `${description.substr(0, 300)}...`;
    return str;
  }

  render() {
    const scholarship = this.props.scholarship;
    return (
      <div className={styles.cmon_man} >
        <h6><Link to={`scholarships/${scholarship.id}/apply`}>{scholarship.name}</Link></h6>
        <p> {this.snip(scholarship.description)} </p>
      </div>
    );
  }
}

Preview.propTypes = {
  scholarship: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })
};

Preview.defaultProps = {
  scholarship: false
};

export default Preview;
