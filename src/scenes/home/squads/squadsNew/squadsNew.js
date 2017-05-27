import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
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

  onSquadNameChange = (value) => {
    this.setState({
      name: value
    });
  }

  onDescriptionChange = (squadDescription) => {
    this.setState({
      description: squadDescription
    });
  }

  onMinChange = (minNum) => {
    this.setState({
      minimum: minNum
    });
  }

  onMaxChange = (maxNum) => {
    this.setState({
      maximum: maxNum
    });
  }

  onWeeklyActivitiesChange = (weeklyActivities) => {
    this.setState({
      activities: weeklyActivities
    });
  }

  onEndConditionChange = (endCondition) => {
    this.setState({
      endCondition
    });
  }

  onUpdateSelect = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  }

  buildSkillLevelOptions = () =>
    [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' }
    ]

  buildMentorOptions = () =>
    this.state.mentors.map(mentor => ({ value: mentor.id, label: mentor.email }))

  handleOnClick = () => {
    ApiHelpers.postSquads({
      name: this.state.name,
      leaderId: this.state.leaderId,
      description: this.state.description,
      minimum: this.state.minimum,
      maximum: this.state.maximum,
      skillLevel: this.state.skillLevel,
      activities: this.state.activities,
      endCondition: this.state.endCondition,
      mentorIds: [this.state.assistingMentorId]
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
      <Section className={styles.squadNew} title="Create a New Squad" >
        { error && <div className={styles.squadNewError}>{error}</div> }
        <Form className={styles.squadNewForm}>
          <h2>Squad name*</h2>
          <FormInput id="squadName" placeholder=" " onChange={this.onSquadNameChange} />

          <h2>Description*</h2>
          <span>What will your squad be doing? Use this to get people excited to join!</span>
          <FormInput id="description" placeholder=" " onChange={this.onDescriptionChange} />

          <h2>Squad Leader</h2>
          <span>Who will be leading this squad?</span>
          <FormSelect
            id="squadLeader"
            prompt="Choose Squad Leader"
            options={this.buildMentorOptions()}
            onChange={e => this.onUpdateSelect('leaderId', e)}
          />

          <h2>Mentors</h2>
          <span>Which mentors will be assisting this squad?</span>
          <FormSelect
            id="mentorsAssistingSquad"
            prompt="Choose Mentors to Assist Squad"
            options={this.buildMentorOptions()}
            onChange={e => this.onUpdateSelect('assistingMentorId', e)}
          />
          <h2>Minimum Numbers*</h2>
          <span>How many members must join before you start?</span>
          <FormInput id="minNumbers" placeholder=" " onChange={this.onMinChange} />

          <h2>Maximum Numbers*</h2>
          <span>How many members are you willing to have total?</span>
          <FormInput id="maxNumbers" placeholder=" " onChange={this.onMaxChange} />

          <h2>Skill Level*</h2>
          <span>What is the minimum skill level needed to participate?</span>
          <FormSelect
            id="skillLevel"
            prompt="Select Squad Skill Level"
            options={this.buildSkillLevelOptions()}
            onChange={e => this.onUpdateSelect('skillLevel', e)}
          />

          <h2>Weekly Activities*</h2>
          <span>What does this squad schedule look like?</span>
          <FormInput id="activities" placeholder=" " onChange={this.onWeeklyActivitiesChange} />

          <h2>End Condition*</h2>
          <span>When will this squad end? This can be a date, a time period (4 weeks), or when a goal is met.</span>
          <FormInput id="endCondition" placeholder=" " onChange={this.onEndConditionChange} />
          <FormButton className={styles.submitButton} text="Create Squad" onClick={this.handleOnClick} theme="red" />
          {success && <Redirect to="/thanks" />}
        </Form>
      </Section>
    );
  }
}
export default SquadsNew;
