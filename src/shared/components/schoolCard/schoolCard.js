import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

class schoolCard extends Component {
  render() {
    return (
        <div className={styles.card}>
    		<div className={styles.card-image}>  
    		  <img src={this.props.image} alt={this.props.title} />
    		</div>
    
    		<div className={styles.text}>
    		  <p><span className={styles.school-name}> {this.props.schoolName} </span> <br />
    		  <span className={styles.school-location}>{this.props.schoolLocation}</span>
    		  </p>
    		  <p className={styles.school-info}>
    		    <strong>GI Bill Accepted:</strong> {this.props.GI}
    		    <strong>Commitment:</strong> {this.props.fullTime}
    		    <strong>Hardware Included:</strong> {this.props.hardware}
    		  </p>
    		</div>
  		</div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolLocation: PropTypes.string.isRequired,
  GI: PropTypes.string.isRequired,
  fullTime: PropTypes.string.isRequired,
  hardware: PropTypes.string.isRequired
};

export default SchoolCard;