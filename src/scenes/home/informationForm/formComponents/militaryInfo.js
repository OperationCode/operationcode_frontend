import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { MILSTATUS, BRANCH } from 'shared/constants/status';
import styles from './formComponents.css';

class MilitaryInfo extends Component {

  render() {
    return (
      <Form className={styles.signup}>
        <h3>Progress = {this.props.percent}%</h3>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        <FormSelect
          id="militaryStatus"
          options={MILSTATUS}
          prompt="Current Military Status"
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormSelect
          id="branch"
          options={BRANCH}
          prompt="Your Branch of Service"
          onChange={e => this.props.update(e, e.target.value)}
        />
      </Form>
    );
  }
}

MilitaryInfo.propTypes = {
  update: PropTypes.func,
  percent: PropTypes.string
};

MilitaryInfo.defaultProps = {
  update: null,
  percent: '0'
};

export default MilitaryInfo;
