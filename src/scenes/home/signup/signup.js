import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import DataFormItem from 'shared/components/dataFormItem/dataFormItem';
import styles from './signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form>
          <DataFormItem displayName="Email" />
          <DataFormItem displayName="Zip" />
        </Form>
      </div>
    );
  }
}

export default SignUp;
