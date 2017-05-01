import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.element.isRequired
};

export default Form;
