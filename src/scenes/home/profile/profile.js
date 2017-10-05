import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FaGraduationCap,
  FaLifeBouy,
  FaBriefcase,
  FaSlack,
  FaUser,
  FaCommentsO,
} from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import LinkedIconCard from 'shared/components/linkedIconCard/linkedIconCard';
import Idme from 'shared/components/idme/idme';
import styles from './profile.css';

class Profile extends Component {
  render() {
    return (
      <Section title="My Profile" theme="gray">
        <div className={styles.profileContainer}>
          <div className={styles.profileContainer__cards}>
            <LinkedIconCard url={'https://op.co.de/mentor-request'} title={'Request a Mentor'}>
              <FaLifeBouy className={styles.profile__icon} />
            </LinkedIconCard>
            <LinkedIconCard url={'/scholarships'} title={'Check for Scholarships'}>
              <FaGraduationCap className={styles.profile__icon} />
            </LinkedIconCard>
            <LinkedIconCard url={'/jobs'} title={'Check for Open Jobs'}>
              <FaBriefcase className={styles.profile__icon} />
            </LinkedIconCard>
            <LinkedIconCard
              url={'https://operation-code.slack.com/'}
              title={'Enter our Slack Channel'}
            >
              <FaSlack className={styles.profile__icon} />
            </LinkedIconCard>
            <LinkedIconCard
              url={'https://community.operationcode.org/'}
              title={'Enter our Discourse Forums'}
            >
              <FaCommentsO className={styles.profile__icon} />
            </LinkedIconCard>
            <LinkedIconCard url={'/signup-info'} title={'Update Info'}>
              <FaUser className={styles.profile__icon} />
            </LinkedIconCard>
          </div>
          <div className={styles.profileContainer__idMe}>
            {this.props.verified && <h2>Your profile is verified with id.me</h2>}
            {!this.props.verified && (
              <div className={styles.profileContainer__idMe__btn}>
                <span className={styles.profileContainer__idMe__title}>
                  Get Verified for Added Benefits
                </span>
                <p>
                  In order to take advantage of resources such as Mentorship and Scholarships, we
                  require that you verify your military affiliation status. We use Id.Me for
                  verification, a highly secure and specialized platform that will protect your
                  information. We will not store or transfer any of your sensitive information.
                </p>
                <Idme />
              </div>
            )}
          </div>
        </div>
      </Section>
    );
  }
}

Profile.propTypes = {
  verified: PropTypes.bool,
};

Profile.defaultProps = {
  verified: false,
};

export default Profile;
