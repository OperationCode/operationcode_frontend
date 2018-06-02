import React from 'react';
import PropTypes from 'prop-types';

const FeaturedJob = ({
  title,
  source,
  sourceUrl,
  city,
  state,
  country,
  description,
  remote
}) => (
  <div>
    <div className="zr_job">
      <div className="zr_job_title">
        <a rel="nofollow" href={sourceUrl} className="zr_job_link">{title}</a>
      </div>
      <div className="zr_job_details">
        <div className="zr_job_detail_container">
          <span className="zr_job_company">{source}</span>
          <span className="zr_job_city">{city}</span>
          <span className="zr_job_state">{state}</span>
          <span className="zr_job_country">{country}</span>
          <span className="zr_job_remote">{remote ? 'Remote' : ''}</span>
        </div>
        <div className="zr_job_detail_container" />
      </div>
      <div className="zr_job_desc">{description}</div>
    </div>
  </div>
);

FeaturedJob.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  remote: PropTypes.bool
};

FeaturedJob.defaultProps = {
  remote: false
};

export default FeaturedJob;
