import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import civicX from '../../../../images/civic-x.png';
import styles from './civicXBadge.css';

const CivicXBadge = ({ sourceUrl = 'http://cvcx.org/veterans-solutions-lab/' }) => (
  <div>
    <OutboundLink href={sourceUrl} analyticsEventLabel={`[CivicX Accelerator Badge] ${sourceUrl}`}>
      <img
        alt="Operation Code is a graduate of the CivicX Accelerator."
        className={styles.civic}
        src={civicX}
      />
    </OutboundLink>
  </div>
);

CivicXBadge.propTypes = {
  sourceUrl: PropTypes.string.isRequired
};

export default CivicXBadge;
