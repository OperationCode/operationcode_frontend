import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
// import FormInput from 'shared/components/form/formInput/formInput';
import { WORKINFO } from 'shared/constants/status';

class WorkInfo extends Component {

  render() {
    return (
      <Form>
        <span>Progress = {this.props.percent}%</span>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        <FormSelect
          id="WorkInfo"
          options={WORKINFO}
          prompt="Current Employment Status"
          onChange={e => this.props.update(e, e.target.value)}
        />
        <label htmlFor="role">Job Role</label>
        <input
          id="role"
          placeholder={this.props.role}
          onChange={e => this.props.update(e, e.target.value)}
        />
        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          placeholder={this.props.company}
          onChange={e => this.props.update(e, e.target.value)}
        />
      </Form>
    );
  }
}

WorkInfo.propTypes = {
  update: PropTypes.func,
  role: PropTypes.string,
  company: PropTypes.string,
  percent: PropTypes.string
};

WorkInfo.defaultProps = {
  update: null,
  role: 'Your Role / Title',
  company: 'Company Name',
  percent: '0'
};

export default WorkInfo;
