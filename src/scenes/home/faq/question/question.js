import React from 'react';
import PropTypes from 'prop-types';
import styles from './question.css';

const Question = ({ q, a }) => (
  <div className={styles.accordionSingle}>
    <input className={styles.accordionSingleHidden} type="checkbox" id={q} />
    <label className={styles.accordionSingleQuestion} htmlFor={q}> {q}</label>
    { // eslint-disable-next-line
      <p className={styles.accordionSingleAnswer} dangerouslySetInnerHTML={{ __html: a }} />
    }
  </div>
);

Question.propTypes = {
  q: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired
};

export default Question;
