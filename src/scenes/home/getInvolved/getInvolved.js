import React from 'react';
import HeroBanner from 'shared/components/heroBanner/heroBanner';
import WhyGive from './whyGive/whyGive';
import Volunteer from './volunteer/volunteer';

const getInvolved = () => (
  <div>
    <HeroBanner
      imageSrc="https://s3.amazonaws.com/operationcode-assets/page-get_involved/banner_people1.jpg"
      title="Get Involved"
      subtitle="See the magic happen..."
    />

    <WhyGive />
    <Volunteer />
  </div>
);

export default getInvolved;
