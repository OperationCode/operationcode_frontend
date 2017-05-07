import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import DataFormItem from 'shared/components/dataFormItem/dataFormItem';
import styles from './signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form>
          <DataFormItem placeholder="Email" />
          <DataFormItem placeholder="Zip" />
        </Form>
      </div>
    );
  }
}

export default SignUp;
