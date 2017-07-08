import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './quoteBanner.css';

class QuoteBanner extends Component {
  render() {
    return (
      <div className={styles.quoteBanner}>
        <span className={styles.quoteLines} />
        <h2 className={styles.quoteText}>
          &quot;{this.props.quote}&quot;
          <br />
          <span className={styles.author}>- {this.props.author}</span>
        </h2>
        <span className={styles.quoteLines} />
      </div>
    );
  }
}

QuoteBanner.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default QuoteBanner;
