import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import Form from 'shared/components/form/form';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
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

  onEmailChange = (value) => {
    this.setState({
      email: value
    });
  }

  onAdditionalDetailsChange = (value) => {
    this.setState({
      additionalDetails: value
    });
  }

  onSelectMentor = (mentor) => {
    this.setState({
      mentor
    });
  }

  onSelectServices = (serviceName) => {
    this.setState({
      selectedService: serviceName
    });
  }

  onSelectSkillsets = (skillsets) => {
    this.setState({
      selectedSkillsets: skillsets
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
          email: this.state.email,
          serviceIds: this.state.selectedService,
          skillsets: this.state.selectedSkillsets.map(x => x.label).join(','),
          additionalDetails: this.state.additionalDetails,
          mentorId: this.state.mentor.value
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
          { this.state.error &&
            <div className={styles.error}>{this.state.error}</div>
          }
          { this.state.isLoading && <div>Loading...</div> }
          { !this.state.isLoading &&
          <Form className={styles.form}>
            <p className={styles.intro}>
              Please use this form to schedule a mentorship session.
              Each session is 30 minutes. If you think you&apos;ll need more time,
              please let us know in the additional comments field below.
            </p>

            <div className={styles.formBlock}>
              <h2>Slack User Name</h2>
              <FormInput
                id="slackUser"
                onChange={this.onSlackUserNameChange}
              />
            </div>

            <div className={styles.formBlock}>
              <h2>Email</h2>
              <FormInput
                id="email"
                onChange={this.onEmailChange}
              />
            </div>

            <div className={styles.formBlock}>
              <h2>Service</h2>
              <p className={styles.prompt}>
                Which of our one-on-one mentor services would you like to book?
              </p>
              <Select
                className={styles.select}
                placeholder="Choose a service"
                options={this.buildOptions(this.state.services)}
                value={this.state.selectedService}
                autoBlur
                autosize
                onChange={e => this.onSelectServices(e)}
              />
            </div>

            <div className={styles.formBlock}>
              <h2>Skillset</h2>
              <p className={styles.prompt}>
                Do you need a mentor for a specific language or area of software development?
              </p>
              <Select
                className={styles.select}
                placeholder="Choose one or more skillsets"
                options={this.buildOptions(this.state.skillsets)}
                value={this.state.selectedSkillsets}
                autoBlur
                autosize
                multi
                onChange={e => this.onSelectSkillsets(e)}
              />
            </div>

            <div className={styles.formBlock}>
              <h2>Mentor</h2>
              <p className={styles.prompt}>Would you like to pick a specific mentor?</p>
              <Select
                className={styles.select}
                placeholder="Choose a mentor"
                options={this.buildOptions(this.state.mentors)}
                value={this.state.mentor}
                autoBlur
                autosize
                onChange={e => this.onSelectMentor(e)}
              />
            </div>

            <div className={styles.formBlock}>
              <h2>Additional Details</h2>
              <p className={styles.prompt}>
                Please provide us with any more info
                that may help in us in assigning a mentor to this request.
              </p>
              <FormInput id="additionalDetails" onChange={this.onAdditionalDetailsChange} />
            </div>

            <div className={styles.formRow}>
              <h2>Military Affiliation Certification</h2>
              <FormCheckBox
                value="I certify that I am a member of one of the following categories:
                Veteran, Active Duty, Military Spouse"
                key="asdfsdafdsa"
                checkBox={{ display: 'flex', alignItems: 'center', margin: '20px 10px' }}
                label={{ marginLeft: '15px' }}
              />
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
