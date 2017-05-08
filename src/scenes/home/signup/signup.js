import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import DataFormItem from 'shared/components/form/dataFormItem/dataFormItem';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import styles from './signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form>
          <DataFormItem id="email" type="email" placeholder="Email" />
          <DataFormItem id="zip" placeholder="Zip Code" />
          <FormPassword id="password" placeholder="Password" />
        </Form>
      </div>
    );
  }
}

export default SignUp;
