import React from 'react';
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

const Landing = () => (
  <div className={styles.landing}>
    <div className={styles.pageHeading}>
      <h1>
        The largest community dedicated to helping military veterans and families launch software
        development careers.
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

export default Landing;
