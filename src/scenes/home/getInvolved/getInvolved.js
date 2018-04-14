import React from 'react';
import HeroBanner from 'shared/components/heroBanner/heroBanner';
import banner1 from 'images/bannerimg1.jpg';
import WhyGive from './whyGive/whyGive';
import Volunteer from './volunteer/volunteer';

const getInvolved = () => (
  <div>
    <HeroBanner
      imageSrc={banner1}
      title="Get Involved"
      subtitle="See the magic happen..."
    />

    <WhyGive />
    <Volunteer />
  </div>
);

export default getInvolved;
