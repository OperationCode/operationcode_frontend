import React, { Component } from 'react';
// import * as CookieHelpers from 'shared/utils/cookieHelper';
import Form from 'shared/components/form/form';
// import FormInput from 'shared/components/form/formInput/formInput';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import FormCheckbox from 'shared/components/form/formCheckbox/formCheckbox';
import FormButton from 'shared/components/form/formButton/formButton';

class ScholarshipApplication extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  onCheckboxChange = (value) => {
    this.setState({
      checked: value
    });
  }

  isFormValid = () =>
    this.state.checked;

  render() {
    // console.log(CookieHelpers.getUserId());
    return (
      <div>
        <Form>
          <FormTextArea />
          <FormCheckbox onChange={this.onCheckboxChange} />
          {this.isFormValid() && <FormButton text="Submit Application" />}
        </Form>
      </div>
    );
  }
}

export default ScholarshipApplication;
