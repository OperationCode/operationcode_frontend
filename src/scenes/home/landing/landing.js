import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { FaClose } from 'react-icons/lib/fa';
import LinkButton from 'shared/components/linkButton/linkButton';
import WhatWeDo from './whatWeDo/whatWeDo';
import Membership from './membership/membership';
import MoreInformation from './moreInformation/moreInformation';
import SuccessStories from './successStories/successStories';
import Partners from './partners/partners';
import Donate from '../../../shared/components/donate/donate';
import Join from '../../../shared/components/join/join';
import TopCode from './topcodeBanner/topcodeBanner';
// import EmailSignup from './emailSignup/emailSignup';

import styles from './landing.css';

class Landing extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    // Uncomment in order to render landing screen pop-up when desired
    // this.toggleModal();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className={styles.landing}>
        {/* Modal only rendered when this.toggleModal() is uncommented in componentDidMount() */}
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.toggleModal}
          contentLabel="None"
          className={styles.landingModal}
        >
          <FaClose
            size={48}
            className={styles.landingModal_CloseButton}
            onClick={this.toggleModal}
          />
          <div className={styles.landingModal_Content}>
            <h3>Pop-up Title</h3>
            <p>Content</p>
          </div>
        </ReactModal>
        <div className={styles.pageHeading}>
          <h1>
            The largest community dedicated to helping military veterans and families launch
            software development careers.
          </h1>
          <LinkButton text="Join" theme="red" link="/signup" />
        </div>
        <TopCode />
        <WhatWeDo />
        <Membership />
        <MoreInformation />
        <SuccessStories />
        <Partners />
        <Donate />
        <Join />
        <EmailSignup sendNotification={this.props.sendNotification} /> 
      </div>
    );
  }
}

/* Landing.propTypes = {
  sendNotification: PropTypes.func.isRequired
}; */

export default Landing;
