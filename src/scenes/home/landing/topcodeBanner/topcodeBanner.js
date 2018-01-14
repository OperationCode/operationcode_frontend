import React from 'react';
import topcodeLogo from 'images/partnerLogos/logo_topcoder_with_name.svg';
import AdBanner from 'shared/components/adBanner/adBanner';

const topcodeBanner = () => (

  <AdBanner>
    link={'http://op.co.de/topcoder-veterans'},
    imageSource = {topcodeLogo},
    altText = {'Top Coder'},
    adBannerText= {'Operation Code and Topcoder are excited to announce opportunities for our members to work on open source coding projects, solve critical problems, and compete for cash prizes! Sign up at topcoder-veterans.'}
  </AdBanner>
);

export default topcodeBanner;
