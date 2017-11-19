import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Form from 'shared/components/form/form';
import PropTypes from 'prop-types';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import { MILSTATUS, BRANCH, BRANCH_PROMPT } from 'shared/constants/status';
import styles from './formComponents.css';

class MilitaryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { branchPrompt: BRANCH_PROMPT.other };
  }

  onChange = (e) => {
    this.props.update(e, e.target.value);
    if (e.target.value === 'spouse') {
      this.setState({ branchPrompt: BRANCH_PROMPT.spouse });
    } else {
      this.setState({ branchPrompt: BRANCH_PROMPT.other });
    }
  };

  render() {
    return (
      <Form className={styles.signup}>
        <h3>Progress = {this.props.percent}%</h3>
        <Line percent={this.props.percent} strokeWidth="4" strokeColor="green" />
        <FormSelect
          id="militaryStatus"
          options={MILSTATUS}
          prompt="Current Military Status"
          onChange={e => this.onChange(e)}
        />
        <FormSelect
          id="branch"
          options={BRANCH}
          prompt={this.state.branchPrompt}
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
