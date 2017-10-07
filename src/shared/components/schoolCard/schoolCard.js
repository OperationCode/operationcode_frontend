import React from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

const SchoolCard = ({
  alt,
  GI,
  fullTime,
  hardware,
  link,
  logo,
  schoolAddress,
  schoolCity,
  schoolName,
  schoolState
}) => (
  <div className={styles.schoolCard}>
    <div className={styles.schoolCardImage}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={alt} className={styles.logo} />
      </a>
    </div>

    <div className={styles.schoolText}>
      <p>
        <span className={styles.schoolName}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {schoolName}
          </a>
        </span>
        <br />
        <span className={styles.schoolLocation}>
          {schoolAddress.includes('Online') ? <p>Online Available<br /></p> : null}
          {schoolCity}{schoolCity ? ', ' : null}
          {schoolState}{schoolState ? <br /> : null}
          <br />
        </span>
      </p>

      <p className={styles.schoolInfo}>
        GI Bill Accepted: <b>{GI}</b>
        <br />
        Commitment: <b>{fullTime}</b>
        <br />
        Hardware Included: <b>{hardware}</b>
      </p>
    </div>
  </div>
);

SchoolCard.propTypes = {
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolAddress: PropTypes.string.isRequired,
  schoolCity: PropTypes.string,
  schoolState: PropTypes.string,
  logo: PropTypes.string.isRequired,
  GI: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
  hardware: PropTypes.string.isRequired,
};

SchoolCard.defaultProps = {
  schoolCity: null,
  schoolState: null,
};

export default SchoolCard;
