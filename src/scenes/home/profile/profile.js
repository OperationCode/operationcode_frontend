import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import Idme from 'shared/components/idme/idme';
import discourseImage from '../../../images/Discourse_logo.png';
import slackImage from '../../../images/slack.png';
import styles from './profile.css';

class Profile extends Component {

  render() {
    return (
      <div>
        <Section title="Scholarship Opportunities" theme="white">
          <span className={styles.profileText}>Scholarships to attend tech conferences for the military community!</span>
          <Link to="/scholarships">
            <FaGraduationCap className={styles.profileImage} size={150} />
          </Link>
        </Section>
        <Section title="Operation Code Community" theme="white">
          <span className={styles.profileText}>Visit the Operation Code Community by clicking below.</span>
          <a href="https://community.operationcode.org" target="_blank" rel="noopener noreferrer">
            <img className={styles.profileImage} src={discourseImage} alt="Visit the Operation Code Community" />
          </a>
        </Section>

        <Section title="Sign-in with Slack" theme="white">
          <span className={styles.profileText}>Visit the Operation Code Slack Channel by clicking below.</span>
          <a href="https://operation-code.slack.com" target="_blank" rel="noopener noreferrer">
            <img className={styles.profileImage} alt="Sign in with Slack" src={slackImage} />
          </a>
        </Section>

        <Section title="Veteran Status" theme="white">
          <div>
            {this.props.verified && <h2>Your profile is verified with id.me</h2>}
            {!this.props.verified && <div className={styles.idmeButton}><Idme /></div>}
          </div>
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
