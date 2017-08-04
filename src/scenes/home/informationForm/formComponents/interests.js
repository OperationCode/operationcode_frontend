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
          name={'Interest'}
          value={'Java'}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormCheckBox
          name={'Interest'}
          value={'Python'}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormCheckBox
          name={'Interest'}
          value={'Butts'}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormCheckBox
          name={'Interest'}
          value={'JS'}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormCheckBox
          name={'Interest'}
          value={'Other Butts'}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormCheckBox
          name={'Interest'}
          value={'Things'}
          onChange={e => this.props.update(e, e.target.value)}
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
