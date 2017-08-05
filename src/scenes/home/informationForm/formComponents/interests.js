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
          name={'interests'}
          value={'Java'}
          onChange={e => this.props.update(e.target.value)}
        />
        <FormCheckBox
          name={'interests'}
          value={'Python'}
          onChange={e => this.props.update(e.target.value)}
        />
        <FormCheckBox
          name={'interests'}
          value={'Butts'}
          onChange={e => this.props.update(e.target.value)}
        />
        <FormCheckBox
          name={'interests'}
          value={'JS'}
          onChange={e => this.props.update(e.target.value)}
        />
        <FormCheckBox
          name={'interests'}
          value={'Other Butts'}
          onChange={e => this.props.update(e.target.value)}
        />
        <FormCheckBox
          name={'interests'}
          value={'Things'}
          onChange={e => this.props.update(e.target.value)}
        />
      </Form>
    );
  }
}

Interests.propTypes = {
  percent: PropTypes.string,
  update: PropTypes.func
};

Interests.defaultProps = {
  percent: '0',
  update: null,
};

export default Interests;
