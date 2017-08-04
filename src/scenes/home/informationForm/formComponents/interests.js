import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';

class Interests extends Component {

  render() {
    return (
      <Form>
        <span>Progress = {this.props.percent}%</span>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
      </Form>
    );
  }
}

Interests.propTypes = {
  update: PropTypes.func,
  percent: PropTypes.string
};

Interests.defaultProps = {
  update: null,
  percent: '0'
};

export default Interests;
