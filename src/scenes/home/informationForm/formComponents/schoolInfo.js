import React, { Component } from 'react';
import Form from 'shared/components/form/form';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { SCHOOLINFO } from 'shared/constants/status';
import styles from './formComponents.css';

class SchoolInfo extends Component {

  render() {
    return (
      <Form className={styles.signup}>
        <h3>Progress = {this.props.percent}%</h3>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        <FormSelect
          id="schoolLevel"
          options={SCHOOLINFO}
          prompt="Level of Schooling"
          onChange={e => this.props.update(e, e.target.value)}
        />
        <FormSelect
          id="schoolInfo"
          options={
          [
            {
              value: true,
              label: 'I would like updates on schools'
            },
            {
              value: false,
              label: 'I would not like to receive updates'
            },
          ]
          }
          prompt="Seeking School Information?"
          onChange={e => this.props.update(e, e.target.value)}
        />

      </Form>
    );
  }
}

SchoolInfo.propTypes = {
  update: PropTypes.func,
  percent: PropTypes.string
};

SchoolInfo.defaultProps = {
  update: null,
  percent: '0'
};

export default SchoolInfo;
