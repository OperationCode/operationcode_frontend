import React from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import IconCard from 'shared/components/iconCard/iconCard';
import Idme from 'shared/components/idme/idme';
import styles from './profile.css';

const Profile = ({ verified }) => (
  <Section title="My Profile" theme="gray">
    <div className={verified ? styles.profileContainer_verified : styles.profileContainer}>

      {verified && (
        <div
          className={
            verified ? styles.profileContainer__cards_verified : styles.profileContainer__cards
          }
        >
          <IconCard
            title="Request a Mentor"
            fontAwesomeIcon="FaLifeBouy"
            url="https://op.co.de/mentor-request"
          />

          <IconCard
            title="Check for Scholarships"
            fontAwesomeIcon="FaGraduationCap"
            url="/scholarships"
          />
        </div>
      )}

      <div
        className={
          verified ? styles.profileContainer__cards_verified : styles.profileContainer__cards
        }
      >
        <IconCard title="Check for Open Jobs" fontAwesomeIcon="FaBriefcase" url="/jobs" />

        <IconCard
          title="Enter our Slack Team"
          fontAwesomeIcon="FaSlack"
          url="https://operation-code.slack.com/"
        />

        <IconCard title="Update Info" fontAwesomeIcon="FaUser" url="/signup-info" />
      </div>
      <div
        className={
          verified ? styles.profileContainer__idMe_verified : styles.profileContainer__idMe
        }
      >
        {verified && <h5>Your profile is verified with id.me</h5>}
        {!verified && (
          <div className={styles.profileContainer__idMe__btn}>
            <span className={styles.profileContainer__idMe__title}>
              Get Verified for Added Benefits
            </span>
            <p>
              To gain access to <span className={styles.profileContainer__verified__services}>Mentorship</span> and <span className={styles.profileContainer__verified__services}>Scholarships</span>, we
              require that you verify your military status.
            </p>

            <p>
              Sign in below to get verified!
            </p>
            <Idme />
          </div>
        )}
      </div>
    </div>
  </Section>
);

Profile.propTypes = {
  verified: PropTypes.bool
};

Profile.defaultProps = {
  verified: false
};

export default Profile;
