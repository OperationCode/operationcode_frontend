import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './preview.css';

class Preview extends Component {
  snip = (description) => {
    const str = `${description.substr(0, 300)}...`;
    return str;
  }

  render() {
    const { scholarship } = this.props;
    return (
      <a className={styles.scholarshipPreviewLink} href={`scholarships/${scholarship.id}/apply`}>
        <div className={styles.preview}>
          <h6 className={styles.previewHeader6}>{scholarship.name}</h6>
          <span> {this.snip(scholarship.description)} </span>
        </div>
      </a>
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
