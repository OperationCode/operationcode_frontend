import React from 'react';
import HeroBanner from 'shared/components/heroBanner/heroBanner';
import banner1 from 'images/bannerimg1.jpg';
import WhyGive from './whyGive/whyGive';
import Volunteer from './volunteer/volunteer';
import SuccessStories from './successStories/successStories';
import styles from './getInvolved.css';

const getInvolved = () => (
  <div className={styles.page}>
    <HeroBanner
      imageSrc={banner1}
      title="Get Involved"
      subtitle="See the magic happen..."
    />

    <WhyGive />
    <Volunteer />
    <SuccessStories />
  </div>
);

export default getInvolved;
