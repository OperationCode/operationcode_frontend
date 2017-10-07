import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './schoolCard.css';

class SchoolCard extends Component {
  onClick = () => {
    if (this.props.onSchoolClicked) {
      this.props.onSchoolClicked(this.props);
    }
  }

  render() {
    return (
      <div className={styles.schoolCard} tabIndex="0" role="button" onClick={e => this.onClick(e)}>
        <div className={styles.schoolCardImage}>
          {!this.props.noLink ? <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <img src={this.props.logo} alt={this.props.alt} className={styles.logo} />
          </a>
            : <img src={this.props.logo} alt={this.props.alt} className={styles.logo} />}
        </div>
        <div className={styles.schoolText}>
          <p>
            <span className={styles.schoolName}>
              {!this.props.noLink ? <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                {this.props.schoolName}
              </a>
                : this.props.schoolName}
            </span>
            <br />
            <span className={styles.schoolLocation}>
              {this.props.schoolAddress.includes('Online') ? <p>Online Available<br /></p> : null}
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
  hardware: PropTypes.string.isRequired,
  noLink: PropTypes.bool,
  onSchoolClicked: PropTypes.func
};

SchoolCard.defaultProps = {
  schoolCity: null,
  schoolState: null,
  noLink: false,
  onSchoolClicked: null
};

export default SchoolCard;
