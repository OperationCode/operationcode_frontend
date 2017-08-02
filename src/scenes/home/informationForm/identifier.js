import React from 'react';
import Form from 'shared/components/form/form';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { IDENTIFIERS } from 'shared/constants/status';

const Identifier = () => {
  return (
    <Form>
      <FormSelect
        id="identifier"
        options={IDENTIFIERS}
        prompt="Which describes you"
        onChange={e => this.onMentorStatusChange(e.target.value)}
      />
    </Form>
  );
};

export default Identifier;
