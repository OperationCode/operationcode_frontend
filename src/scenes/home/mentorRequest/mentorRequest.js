import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'shared/components/form/form';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './mentorRequest.css';


class MentorRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const { mentors, services, skillsets } = await ApiHelpers.getMentorshipData();
      this.setState({
        mentors,
        services,
        skillsets,
        isLoading: false
      });
    } catch (error) {
      this.setState({ error: 'There was an error building the form. Please try again.' });
    }
  }

  onSlackUserNameChange = (value) => {
    this.setState({
      slackUserName: value
    });
  }

  onAdditionalDetailsChange = (value) => {
    this.setState({
      additionalDetails: value
    });
  }

  onSelectMentor = (event) => {
    this.setState({
      mentorId: event.target.value
    });
  }

  onSelectServices = (event) => {
    const serviceName = event.target.value;
    this.setState({
      selectedServices: serviceName
    });
  }

  onSelectSkillsets = (event) => {
    const selectedSkillsets = this.state.skillsets
      .filter(x => x.id === event.target.value)
      .map(x => x.name).join(',');

    this.setState({
      selectedSkillsets
    });
  }

  buildOptions = dataset => dataset
    .sort((a, b) => a.name.localeCompare(b.name)) // sort alphabetically
    .map(x => ({ value: x.id, label: x.name }))

  handleOnClick = async (event) => {
    event.preventDefault();

    try {
      await ApiHelpers.createMentorRequest({
        slackUser: this.state.slackUserName,
        serviceIds: this.state.selectedServices,
        skillsets: this.state.selectedSkillsets,
        additionalDetails: this.state.additionalDetails,
        mentorId: this.state.mentorId
      });

      this.setState({ success: true });
    } catch (error) {
      /* AIRTABLE MAINTENANCE NOTE:
      The skillsets property that is submitted must contain string values
      that are an exact match for the predefined skillset options on the Airtable
      Mentor Request table, or the request will error out. The skillset FormSelect options that
      a user selects from to set this property are fetched via API from the Airtable Skillsets
      table, which contains exact matches for the predefined skillset options on the Airtable
      Mentor Request table. */
      this.setState({ error: 'There was an error requesting a mentor.' });
    }
  }

  render() {
    return (
      <Section className={styles.mentorRequest} title="Mentor Service Request">
        { this.state.error && <div className={styles.mentorRequestError}>{this.state.error}</div> }
        { this.state.isLoading && <div>Loading...</div> }
        { !this.state.isLoading &&
          <Form className={styles.mentorRequestForm}>
            <span>
              Please use this form to schedule a mentorship session.
              Each session is 30 minutes. If you think you&apos;ll need more time,
              please let us know in the additional comments field below.
            </span>

            <div className={styles.formBlock}>
              <div className={styles.formElement}>
                <h2>Slack User Name</h2>
                <FormInput
                  id="slackUser"
                  placeholder="Slack user name"
                  onChange={this.onSlackUserNameChange}
                />
              </div>
            </div>

            <div className={styles.formBlock}>
              <div className={styles.formElement}>
                <h2>Email</h2>
                <FormInput
                  id="email"
                  placeholder="Email"
                  onChange={this.onSlackNameChange}
                />
              </div>
            </div>

            <div className={styles.formBlock}>
              <div className={styles.formElement}>
                <h2>Service</h2>
                <p>Which one of our services would you like to book?</p>
                <FormSelect
                  id="serviceType"
                  prompt="Choose service"
                  options={this.buildOptions(this.state.services)}
                  onChange={e => this.onSelectServices(e)}
                />
              </div>
            </div>

            <div className={styles.formBlock}>
              <div className={styles.formElement}>
                <h2>Skillset</h2>
                <p>Do you need a mentor for a specific language or area of software development?</p>
                <FormSelect
                  id="languageType"
                  options={this.buildOptions(this.state.skillsets)}
                  onChange={e => this.onSelectSkillsets(e)}
                  prompt="Select language"
                />
              </div>

              <div className={styles.formElement}>
                <h2>Mentor</h2>
                <p>Would you like to pick a specific mentor?</p>
                <FormSelect
                  id="mentor"
                  prompt="Choose mentor"
                  options={this.buildOptions(this.state.mentors)}
                  onChange={e => this.onSelectMentor(e)}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <h2>Additional Details</h2>
              <p>
                Please provide us with any more info
                that may help in us in assigning a mentor to this request.
              </p>
              <FormInput id="additionalDetails" onChange={this.onAdditionalDetailsChange} />
              <FormButton className={styles.joinButton} text="Request Mentor" onClick={e => this.handleOnClick(e)} theme="red" />
              {this.state.success && <Redirect to="/thanks" />}
            </div>
          </Form>
        }
      </Section>
    );
  }
}

export default MentorRequest;
