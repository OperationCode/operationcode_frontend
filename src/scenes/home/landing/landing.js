import React from 'react';
import LinkButton from 'shared/components/linkButton/linkButton';
import Donate from 'shared/components/donate/donate';
import Join from 'shared/components/join/join';
import WhatWeDo from './whatWeDo/whatWeDo';
import Membership from './membership/membership';
import MoreInformation from './moreInformation/moreInformation';
import Partners from './partners/partners';
import SuccessStories from './successStories/successStories';
import styles from './landing.css';

const Landing = () => (
  <div className={styles.landing}>
    <div className={styles.pageHeading}>
      <h1>The largest community dedicated to helping military veterans and
        families launch software development careers.</h1>
      <LinkButton text="Join" theme="red" link="/signup" />
    </div>
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
