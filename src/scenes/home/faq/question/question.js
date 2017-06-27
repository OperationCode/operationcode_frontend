import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './question.css';

class Question extends Component {
  render() {
    return (
    <div class="accordionSingle">
      <input class="accordionSingleHidden" type="checkbox" id={this.props.q} />
      <label class="accordionSingleQuestion" for={this.props.q}> {this.props.q}</label>
      <p class="accordionSingleAnswer">
        {this.props.a}
      </p>
    </div>
    );
  }
}

Question.propTypes = {
  q: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired
};

export default Question;