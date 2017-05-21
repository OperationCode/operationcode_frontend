import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
// import FormButton from 'shared/components/form/formButton/formButton';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './squadsNew.css';

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
      <Section className={styles.squadRequest} title="Create a New Squad" >
        { error && <div className={styles.squadRequestError}>{error}</div> }
        <Form className={styles.squadRequestError}>
          <h2>Name*</h2>
          <FormInput id="slackOrEmailSquadsNew" placeholder="Email or Slack Username" onChange={this.onNameChange} />

          <h2>Squad name*</h2>
          <FormInput id="SquadsName" placeholder=" " onChange={this.onNameChange} />

          <h2>Description*</h2>
          <span>What will your squad be doing? Use this to get people excited to join!</span>
          <FormInput id="Description" placeholder=" " onChange={this.onNameChange} />

          <h2>Squad Leader</h2>
          <p>Who will be leading this squad?</p>
          <FormSelect
            id="squadLeader"
            prompt="Choose Squad Leader"
            options={this.buildMentorOptions()}
            onChange={this.onNameChange}
          />

          <h2>Mentors</h2>
          <p>Which mentors will be assisting this squad?</p>
          <FormSelect
            id="mentorsAssistingSquad"
            prompt="Choose Mentors to Assist Squad"
            options={this.buildMentorOptions()}
            onChange={this.onNameChange}
          />
          <h2>Minimum Numbers*</h2>
          <span>How many members must join before you start?</span>
          <FormInput id="MinNumbers" placeholder=" " onChange={this.onNameChange} />

          <h2>Maximum Numbers*</h2>
          <span>How many members are you willing to have total?</span>
          <FormInput id="MaxNumbers" placeholder=" " onChange={this.onNameChange} />

          <h2>Skill Level*</h2>
          <span>What is the minimum skill level needed to participate?</span>
          <select>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <h2>Weekly Activities*</h2>
          <span>What does this squad schedule look like?</span>
          <FormInput id="WeelyActivities" placeholder=" " onChange={this.onNameChange} />

          <h2>End Condition*</h2>
          <span>When will this squad end? This can be a date, a time period (4 weeks), or when a goal is met.</span>
          <FormInput id="EndCondition" placeholder=" " onChange={this.onNameChange} />
          <FormButton className={styles.submitButton} text="Create Squad" onClick={this.handleOnClick} theme="red" />
          {success && <Redirect to="/thanks" />}
        </Form>
      </Section>
    );
  }
}
export default SquadsNew;
