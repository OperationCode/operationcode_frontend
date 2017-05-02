import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './socialMediaContainer.css';

class SocialMediaContainer extends Component {
  render() {
    return (
      <div className={styles.socialMediaContainer}>
        {this.props.children}
      </div>
    );
  }
}

SocialMediaContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default SocialMediaContainer;
