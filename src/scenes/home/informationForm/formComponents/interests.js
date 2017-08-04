import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import PropTypes from 'prop-types';

class Interests extends Component {

  render() {
    return (
      <Form>
        <span>Progress = {this.props.percent}%</span>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        <FormCheckBox
          name={'Java'}
        />
        <FormCheckBox
          name={'Java'}
        />
        <FormCheckBox
          name={'Java'}
        />
        <FormCheckBox
          name={'Java'}
        />
        <FormCheckBox
          name={'Java'}
        />
        <FormCheckBox
          name={'Java'}
        />
      </Form>
    );
  }
}

Interests.propTypes = {
  percent: PropTypes.string
};

Interests.defaultProps = {
  percent: '0'
};

export default Interests;
