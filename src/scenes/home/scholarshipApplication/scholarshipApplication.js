import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getScholarship } from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import Form from 'shared/components/form/form';
import Head from './head/head';
import Body from './body/body';
import Success from './success/success';
import styles from './scholarshipApplication.css';

class ScholarshipApplication extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      scholarship: {},
      success: false
    };
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    getScholarship(id).then((data) => {
      this.setState({ scholarship: data });
    }).catch((failed) => {
      const { error } = failed.response.data;
      this.setState({ error });
    });
  }

  onSuccess = () => {
    this.setState({ success: true });
  }

  render() {
    return (
      <Section theme="white">
        <Form className={styles.applicationForm}>
          <Head scholarship={this.state.scholarship} />
          { this.state.success ? <Success /> : <Body scholarship_id={this.state.scholarship.id} scholarship_terms={this.state.scholarship.terms} onSuccess={this.onSuccess} /> }
          <div className={styles.red}>{this.state.error}</div>
        </Form>
      </Section>
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
