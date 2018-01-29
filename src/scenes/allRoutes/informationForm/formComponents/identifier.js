import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { IDENTIFIERS } from 'shared/constants/status';
import styles from './formComponents.css';

class Identifier extends Component {
  // call the init method upon component creation
  componentDidMount() {
    if (this.props.init) {
      this.props.init();
    }
  }

  render() {
    return (
      <Form className={styles.signup}>
        <FormSelect
          id="identifier"
          options={IDENTIFIERS}
          prompt="Which describes you"
          onChange={e => this.props.update(e, e.target.value)}
          className={styles.signup}
          validationFunc={e => this.props.validationFunc(e)}
        />
        { !this.props.isValid && this.props.validationErrorMessage }
      </Form>
    );
  }
}

Identifier.propTypes = {
  update: PropTypes.func,
  validationFunc: PropTypes.func,
  isValid: PropTypes.bool,
  validationErrorMessage: PropTypes.string,
  init: PropTypes.func
};

Identifier.defaultProps = {
  update: null,
  validationFunc: null,
  isValid: true,
  validationErrorMessage: null,
  init: null
};

export default Identifier;
