import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
// import FormInput from 'shared/components/form/formInput/formInput';
import { WORKINFO } from 'shared/constants/status';

class WorkInfo extends Component {

  render() {
    return (
      <Form>
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
  company: PropTypes.string
};

WorkInfo.defaultProps = {
  update: null,
  role: 'Your Role / Title',
  company: 'Company Name'
};

export default WorkInfo;
