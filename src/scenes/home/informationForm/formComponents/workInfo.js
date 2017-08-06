import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { WORKINFO } from 'shared/constants/status';
import styles from './formComponents.css';

class WorkInfo extends Component {

  render() {
    return (
      <Form className={styles.signup}>
        <h3>Progress = {this.props.percent}%</h3>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        &nbsp;
        <FormSelect
          id="workInfo"
          options={WORKINFO}
          prompt="Current Employment Status"
          onChange={e => this.props.update(e, e.target.value)}
          className={styles.information__select}
        />
        <input
          id="role"
          placeholder={this.props.role}
          onChange={e => this.props.update(e, e.target.value)}
          className={styles.information__input}
        />
        &nbsp;
        <input
          id="company"
          placeholder={this.props.company}
          onChange={e => this.props.update(e, e.target.value)}
          className={styles.information__input}
        />
      </Form>
    );
  }
}

WorkInfo.propTypes = {
  update: PropTypes.func,
  role: PropTypes.string,
  company: PropTypes.string,
  percent: PropTypes.string
};

WorkInfo.defaultProps = {
  update: null,
  role: 'Your Role / Title at Work',
  company: 'Company Name',
  percent: '0'
};

export default WorkInfo;
