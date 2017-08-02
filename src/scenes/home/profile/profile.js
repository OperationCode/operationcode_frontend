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

        <Section title="Sign-in with Slack">
          <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=3570763187.139671776449">
            <img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
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
