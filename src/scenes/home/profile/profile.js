import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'shared/components/section/section';
import Idme from 'shared/components/idme/idme';

class Profile extends Component {

  render() {
    return (
      <Section title="User Profile">
        {this.props.verified && <h2>Your profile is verified with id.me</h2>}
        {!this.props.verified && <Idme />}
      </Section>
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
