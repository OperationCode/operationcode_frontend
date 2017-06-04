import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

class schoolCard extends Component {
  render() {
    return (
      <div className={styles.schoolCard}>
    		<div className={styles.schoolCardImage}>
    		  <img src={this.props.image} alt={this.props.alt} />
    		</div>

    		<div className={styles.text}>
    		  <p>
            <span className={styles.schoolName}>{this.props.schoolName}</span>
            <br />
      		  <span className={styles.schoolLocation}>{this.props.schoolLocation}</span>
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

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolLocation: PropTypes.string.isRequired,
  GI: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
  hardware: PropTypes.string.isRequired
};

export default SchoolCard;
