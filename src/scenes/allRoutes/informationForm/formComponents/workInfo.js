import React from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { WORKINFO, MENTOR_ANSWERS } from 'shared/constants/status';
import styles from './formComponents.css';

const WorkInfo = ({
  percent, identifier, update, role, company
}) => (
  <Form className={styles.signup}>
    <h3>Progress = {percent}%</h3>
    <Line percent={percent} strokeWidth="4" strokeColor="green" />
    &nbsp;
    {identifier &&
      <FormSelect
        id="mentor"
        options={MENTOR_ANSWERS}
        prompt="Would you like to be a mentor?"
        onChange={e => update(e, e.target.value)}
      />
    }
    <FormSelect
      id="workInfo"
      options={WORKINFO}
      prompt="Current Employment Status"
      onChange={e => update(e, e.target.value)}
      className={styles.information__select}
    />
    <input
      id="role"
      placeholder={role}
      onChange={e => update(e, e.target.value)}
      className={styles.information__input}
    />
    &nbsp;
    <input
      id="company"
      placeholder={company}
      onChange={e => update(e, e.target.value)}
      className={styles.information__input}
    />
  </Form>
);

WorkInfo.propTypes = {
  update: PropTypes.func,
  role: PropTypes.string,
  company: PropTypes.string,
  percent: PropTypes.string,
  identifier: PropTypes.string
};

WorkInfo.defaultProps = {
  update: null,
  role: 'Your Role / Title at Work',
  company: 'Company Name',
  percent: '0',
  identifier: 'false'
};

export default WorkInfo;
