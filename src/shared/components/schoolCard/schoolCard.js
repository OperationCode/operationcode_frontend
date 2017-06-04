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

        <div className={styles.text}>
          <p>
            <span className={styles.schoolName}><a href={this.props.link}>{this.props.schoolName}</a></span>
            <br />
            <span className={styles.schoolLocation}>
              {this.props.schoolAddress}
              <br />
              {this.props.schoolCity} {this.props.schoolState}
            </span>
          </p>

          <p className={styles.schoolInfo}>
            <b>GI Bill Accepted:</b> {this.props.GI}
            <br />
            <b>Commitment:</b> {this.props.fullTime}
            <br />
            <b>Hardware Included:</b> {this.props.hardware}
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
  schoolCity: PropTypes.string.isRequired,
  schoolState: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  GI: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
  hardware: PropTypes.string.isRequired
};

export default SchoolCard;
