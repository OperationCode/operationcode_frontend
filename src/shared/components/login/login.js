import React, { Component } from 'react';
import Modal from 'shared/components/modal/modal';
import Form from 'shared/components/form/form';
import FormEmail from 'shared/components/form/formEmail/formEmail';
import FormPassword from 'shared/components/form/formPassword/formPassword';

class Login extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Form>
            <FormEmail displayName="Username" />
            <FormPassword displayName="Password" />
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
