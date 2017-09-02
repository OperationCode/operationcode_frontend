import React, { Component } from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import LinkButton from 'shared/components/linkButton/linkButton';
import Donate from 'shared/components/donate/donate';
import Join from 'shared/components/join/join';

import GalaBanner from './galaBanner/galaBanner';
import WhatWeDo from './whatWeDo/whatWeDo';
import Membership from './membership/membership';
import MoreInformation from './moreInformation/moreInformation';
import Partners from './partners/partners';
import styles from './landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Reveal className={styles.landing} effect="animated fadeInLeft" />
        <Reveal className={styles.pageHeading} effect="animated zoomIn">
          <h1>The largest community dedicated to helping military veterans and
            families launch software development careers.</h1>
          <LinkButton text="Join" theme="red" link="/signup" />
        </Reveal>
        <Reveal effect="animated fadeInLeft">
          <GalaBanner />
        </Reveal>
        <Reveal effect="animated fadeInRight">
          <WhatWeDo />
        </Reveal>
        <Membership />
        <MoreInformation />
        <Partners />
        <Donate />
        <Join />
      </div>
    );
  }
}

export default Landing;
