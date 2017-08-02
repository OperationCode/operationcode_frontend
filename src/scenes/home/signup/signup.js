import React, { Component } from 'react';
import Account from './scenes/account/account';
import IAmA from './scenes/iAmA/iAmA';
import BasicInfo from './scenes/basicInfo/basicInfo';
import WorkAndSchool from './scenes/workAndSchool/workAndSchool';
import Interests from './scenes/interests/interests';
import ProgressBar from './progressBar/progressBar';

const components = {
  account: Account,
  iAmA: IAmA,
  basicInfo: BasicInfo,
  workAndSchool: WorkAndSchool,
  interests: Interests
};

const steps = [
  'account',
  'iAmA',
  'basicInfo',
  'workAndSchool',
  'interests'
];

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      account: {},
      iAmA: '',
      basicInfo: {},
      workAndSchool: {},
      interests: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(sceneState) {
    // post/patch here

    this.setState({ [`${steps[this.state.step]}`]: sceneState });

    // update step appropriately
    this.setState({ step: this.state.step + 1 });
  }

  render() {
    const StepComponent = components[steps[this.state.step]];

    return (
      <div>
        <ProgressBar />
        <StepComponent type={this.state.iAmA} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Signup;
