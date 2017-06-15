import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

class SchoolCard extends Component {
  render() {
    return (
      <div className={styles.schoolCard}>
        <div className={styles.schoolCardImage}>
          <img src={this.props.logo} alt={this.props.alt} className={styles.logo} />
        </div>

        <div className={styles.schoolText}>
          <p>
            <span className={styles.schoolName}>
              <a href={this.props.link}>{this.props.schoolName}</a>
            </span>
            <br />
            <span className={styles.schoolLocation}>
              {this.props.schoolAddress}{this.props.schoolAddress.includes('Online') ? null : ','}
              <br />
              {this.props.schoolCity}{this.props.schoolCity ? ', ' : null}
              {this.props.schoolState}{this.props.schoolState ? <br /> : null}
              <br />
            </span>
          </p>

          <p className={styles.schoolInfo}>
            GI Bill Accepted: <b>{this.props.GI}</b>
            <br />
            Commitment: <b>{this.props.fullTime}</b>
            <br />
            Hardware Included: <b>{this.props.hardware}</b>
          </p>
        </div>
      </div>
    );
  }
}

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
  hardware: PropTypes.string.isRequired
};

SchoolCard.defaultProps = {
  schoolCity: null,
  schoolState: null
};

export default SchoolCard;
