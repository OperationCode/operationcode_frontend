import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
// import FormInput from 'shared/components/form/formInput/formInput';
import { SCHOOLINFO } from 'shared/constants/status';

class SchoolInfo extends Component {

  render() {
    return (
      <Form>
        <FormSelect
          id="schoolInfo"
          options={SCHOOLINFO}
          prompt="Level of Schooling"
          onChange={e => this.props.update(e, e.target.value)}
        />
      </Form>
    );
  }
}

SchoolInfo.propTypes = {
  update: PropTypes.func
};

SchoolInfo.defaultProps = {
  update: null
};

export default SchoolInfo;
