import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './question.css';

class Question extends Component {
  render() {
    return (
      <div className={styles.accordionSingle}>
        <input className={styles.accordionSingleHidden} type="checkbox" id={this.props.q} />
        <label className={styles.accordionSingleQuestion} htmlFor={this.props.q}> {this.props.q}</label>
        <p className={styles.accordionSingleAnswer} React.createElement ("div", { props.dangerouslySetInnerHTML: { __html: this.props.a } });/>

    );
  }
}
<div 
Question.propTypes = {
  q: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired
};>
</div>

</div>

export default Question;
