import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

class SchoolCard extends Component {
  render() {
    return (
      <div className={styles.schoolCard}>
        <div className={styles.schoolCardImage}>
          <a href={this.props.link} target={this.props.target} rel={this.props.rel}>
            <img src={this.props.logo} alt={this.props.alt} className={styles.logo} />
          </a>
        </div>

        <div className={styles.schoolText}>
          <p>
            <span className={styles.schoolName}>
              <a href={this.props.link} target={this.props.target} rel={this.props.rel}>{this.props.schoolName}</a>
            </span>
            <br />
            <span className={styles.schoolLocation}>
              <a href={this.props.link} target={this.props.target} rel={this.props.rel}>
                {this.props.schoolAddress}{this.props.schoolAddress.includes('Online') ? null : ','}
              </a>
              <br />
              <a href={this.props.link} target={this.props.target} rel={this.props.rel}>
                {this.props.schoolCity}{this.props.schoolCity ? ', ' : null}
                {this.props.schoolState}{this.props.schoolState ? <br /> : null}
              </a>
              <br />
            </span>
          </p>

          {/* <p className={styles.schoolInfo}> */}
          <a href={this.props.link} target={this.props.target} rel={this.props.rel}>
            <p className={styles.schoolInfo}>
              GI Bill Accepted: <b>{this.props.GI}</b>
              <br />
              Commitment: <b>{this.props.fullTime}</b>
              <br />
              Hardware Included: <b>{this.props.hardware}</b>
            </p>
          </a>
        </div>
      </div>
    );
  }
}

SchoolCard.propTypes = {
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
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
  schoolState: null,
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default SchoolCard;
