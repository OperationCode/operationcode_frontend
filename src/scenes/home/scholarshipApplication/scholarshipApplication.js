import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scholarship from 'scenes/home/scholarship/scholarship';
import Form from 'shared/components/form/form';
// import FormInput from 'shared/components/form/formInput/formInput';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import FormCheckbox from 'shared/components/form/formCheckbox/formCheckbox';
import FormButton from 'shared/components/form/formButton/formButton';

class ScholarshipApplication extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      reason: '',
      reasonValid: false,
      scholarshipId: ''
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState({ scholarshipId: id });
  }

  onTextAreaChange = (value) => {
    const valid = value !== '';
    this.setState({
      reason: value,
      reasonValid: valid
    });
  }

  onCheckboxChange = (value) => {
    this.setState({
      checked: value
    });
  }

  isFormValid = () =>
    this.state.checked
    && this.state.reasonValid;

  render() {
    return (
      <div>
        <Scholarship />
        <Form>
          <FormTextArea onChange={this.onTextAreaChange} />
          <FormCheckbox onChange={this.onCheckboxChange} />
          {this.isFormValid() && <FormButton text="Submit Application" />}
        </Form>
      </div>
    );
  }
}

ScholarshipApplication.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    path: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
};

export default ScholarshipApplication;
