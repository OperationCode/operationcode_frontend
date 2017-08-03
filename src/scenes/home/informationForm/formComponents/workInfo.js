import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import FormInput from 'shared/components/form/formInput/formInput';
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
        {this.state.workInfo !== 'none' &&
          <div>
            <FormInput id="firstName" placeholder="First Name" onChange={e => this.props.update(e, e.target.value)} />
            <FormInput id="lastName" placeholder="Last Name" onChange={e => this.props.update(e, e.target.value)} />
          </div>
        }
      </Form>
    );
  }
}

WorkInfo.propTypes = {
  update: PropTypes.func
};

WorkInfo.defaultProps = {
  update: null
};

export default WorkInfo;
