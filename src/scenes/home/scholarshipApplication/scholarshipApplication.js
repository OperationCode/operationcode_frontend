import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScholarship } from 'shared/utils/apiHelper';
import Form from 'shared/components/form/form';
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
      scholarship: {}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    getScholarship(id).then((data) => {
      this.setState({ scholarship: data });
      console.log(this.state.scholarship);
    });
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
        <strong>{this.state.scholarship.name}</strong><br />
        {this.state.scholarship.description}<br />
        {this.state.scholarship.location}
        <Form>
          <FormTextArea onChange={this.onTextAreaChange} />
          {this.state.scholarship.terms}
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
