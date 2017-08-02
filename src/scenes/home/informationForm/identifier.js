import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { IDENTIFIERS } from 'shared/constants/status';

class Identifier extends Component {

  render() {
    return (
      <Form>
        <FormSelect
          id="identifier"
          options={IDENTIFIERS}
          prompt="Which describes you"
          onChange={e => this.props.update(e.target.value)}
        />
      </Form>
    );
  }
}

Identifier.propTypes = {
  update: PropTypes.func
};

Identifier.defaultProps = {
  update: null
};

export default Identifier;
