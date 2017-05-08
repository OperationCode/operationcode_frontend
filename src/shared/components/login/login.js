import React, { Component } from 'react';
import Modal from 'shared/components/modal/modal';
import Form from 'shared/components/form/form';
import DataFormItem from 'shared/components/form/dataFormItem/dataFormItem';

class Login extends Component {
  render() {
    return (
      <div>
        <Modal>
          <Form>
            <DataFormItem displayName="Username" />
            <DataFormItem displayName="Password" type="password" />
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Login;
