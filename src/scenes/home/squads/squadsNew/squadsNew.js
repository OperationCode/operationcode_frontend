import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
// import styles from './squadsNew.css';

class SquadsNew extends Component {
  state = {
    mentors: [],
    name: null,
    loggedIn: true
  };

  componentDidMount() {
    Promise.all([ApiHelpers.getMentors()]).then((values) => {
      this.setState({
        mentors: values[0]
      });
    }).catch(this.setFetchError);
  }

  onUpdateSelect = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  }

  onNameChange = (value) => {
    this.setState({
      name: value
    });
  }

  buildMentorOptions = () =>
    this.state.mentors.map(mentor => ({ value: mentor.id, label: mentor.email }))

  handleOnClick = () => {
    ApiHelpers.postSquads({
      name: this.state.name,
      leader_id: this.state.leaderId,
      description: this.state.description,
      minimum: this.state.minimum,
      maximum: this.state.maximum,
      skill_level: this.state.skillLevel,
      activities: this.state.activities,
      end_condition: this.state.endCondition
    }).then(() => {
      this.setState({ success: true });
    }).catch(() => {
      this.setState({ error: 'There was an error creating a squad.' });
    });
  }

  render() {
    const { error, loggedIn, success } = this.state;
    if (!loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <Section title="Create a New Squad" >
        { error && <div>{error}</div> }
        <Form>
          <h2>Name</h2>
          <FormInput id="slackOrEmailSquadsNew" placeholder="Email or Slack Username" onChange={this.onNameChange} />
          <h2>Squad Leader</h2>
          <p>Who will be leading this squad?</p>
          <FormSelect
            id="squadLeader"
            prompt="Choose Squad Leader"
            options={this.buildMentorOptions()}
            onChange={e => this.onUpdateSelect('mentor', e)}
          />
          <h2>Mentors</h2>
          <p>Which mentors will be assisting this squad?</p>
          <FormSelect
            id="mentorsAssistingSquad"
            prompt="Choose Mentors to Assist Squad"
            options={this.buildMentorOptions()}
            onChange={e => this.onUpdateSelect('mentor', e)}
          />
          <FormButton text="Create Squad" onClick={this.handleOnClick} theme="red" />
          {success && <Redirect to="/thanks" />}
        </Form>
      </Section>
    );
  }
}
export default SquadsNew;
