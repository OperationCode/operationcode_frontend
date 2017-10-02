import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaGraduationCap } from 'react-icons/lib/fa';
import Section from 'shared/components/section/section';
import ProfileCard from 'shared/components/profileCard/profileCard';
import Idme from 'shared/components/idme/idme';
import styles from './profile.css';

class Profile extends Component {
  render() {
    return (
      <Section title="My Profile" theme="gray">
        <div className={styles.profileContainer}>
          <div className={styles.profileContainer__cards}>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
            <ProfileCard url={'/about'} title={'This is the Profile Card'}>
              <FaGraduationCap className={styles.profile__icon} />
            </ProfileCard>
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
