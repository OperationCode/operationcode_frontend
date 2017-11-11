import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { FaClose } from 'react-icons/lib/fa';
import LinkButton from 'shared/components/linkButton/linkButton';
import AnnounceBanner from 'shared/components/announceBanner/announceBanner';
import WhatWeDo from './whatWeDo/whatWeDo';
import Membership from './membership/membership';
import MoreInformation from './moreInformation/moreInformation';
import SuccessStories from './successStories/successStories';
import Partners from './partners/partners';
import Donate from '../../../shared/components/donate/donate';
import Join from '../../../shared/components/join/join';
import BenefitBanner from '../../../images/benefit.jpg';
import MobileBenefitBanner from '../../../images/benefit-mobile.jpg';
import styles from './landing.css';

class Landing extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className={styles.landing}>
        {/* TODO: REMOVE MODAL AFTER BENEFIT DINNER */}
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={this.toggleModal}
          contentLabel="Live Stream of Benefit Dinner"
          className={styles.liveStreamModal}
        >
          <FaClose
            size={48}
            className={styles.liveStreamModal_CloseButton}
            onClick={this.toggleModal}
          />
          <div className={styles.liveStreamModal_Content}>
            <h3>Operation Code Benefit Dinner!</h3>
            <p>From the bottom of our hearts, thank you for all of your support.</p>
            <p>
              We&apos;ll be live streaming the event for your viewing enjoyment. If you&apos;re
              still interested in donating to Operation Code, please{' '}
              <a
                href="https://opencollective.com/operationcode#support"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>!
            </p>
            <LinkButton
              text="Link to Live Stream"
              link="https://www.youtube.com/watch?v=aYcqMZBDUsU"
              isExternal
            />
          </div>
        </ReactModal>
        {/* ************************************************************************** */}

        <div className={styles.pageHeading}>
          <h1>
            The largest community dedicated to helping military veterans and families launch
            software development careers.
          </h1>
          <LinkButton text="Join" theme="red" link="/signup" />
        </div>
        <AnnounceBanner
          link="/benefit"
          imageSource={BenefitBanner}
          fallbackImage450pxWideSource={MobileBenefitBanner}
          altText="Click here to find more information about our Benefit Dinner and Silent Auction on November 10th"
        />
        <WhatWeDo />
        <Membership />
        <MoreInformation />
        <SuccessStories />
        <Partners />
        <Donate />
        <Join />
      </div>
    );
  }
}

export default Landing;
