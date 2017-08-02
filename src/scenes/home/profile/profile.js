import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Idme from 'shared/components/idme/idme';
import discourseImage from '../../../images/Discourse_logo.png';
import styles from './profile.css';

class Profile extends Component {

  render() {
    return (
      <div>
        <Section title="Operation Code Community">
          <span className={styles.discourseText}>Visit the Operation Code Community by clicking below.</span>
          <a href="https://community.operationcode.org">
            <img className={styles.discourseImage} src={discourseImage} alt="Visit the Operation Code Community" />
          </a>
        </Section>

        <Section title="Veteran Status" theme="white">
          {this.props.verified && <h2>Your profile is verified with id.me</h2>}
          {!this.props.verified && <div className={styles.idmeButton}><Idme /></div>}
        </Section>
      </div>
    );
  }
}

Profile.propTypes = {
  verified: PropTypes.bool
};

Profile.defaultProps = {
  verified: false
};

export default Profile;
