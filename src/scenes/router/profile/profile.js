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

Profile.propTypes = {
  verified: PropTypes.bool
};

Profile.defaultProps = {
  verified: false
};

export default Profile;
