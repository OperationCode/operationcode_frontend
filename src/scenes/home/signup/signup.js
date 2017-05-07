import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import DataFormItem from 'shared/components/dataFormItem/dataFormItem';
import styles from './signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form>
          <DataFormItem type="email" placeholder="Email" />
          <DataFormItem type="number" placeholder="Zip" />
        </Form>
      </div>
    );
  }
}

export default SignUp;
