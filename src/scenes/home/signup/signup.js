import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormZipCode from 'shared/components/form/formZipCode/formZipCode';
import FormPassword from 'shared/components/form/formPassword/formPassword';
import styles from './signup.css';

class SignUp extends Component {
  render() {
    return (
      <div className={styles.signup}>
        <Form>
          <FormEmail id="email" placeholder="Email" />
          <FormZipCode id="zip" placeholder="Zip Code" />
          <FormPassword id="password" placeholder="Password" />
        </Form>
      </div>
    );
  }
}

export default SignUp;
