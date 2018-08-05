import React, { Component } from 'react';
import Select from 'react-select';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/fontawesome-free-solid';
import Form from 'shared/components/form/form';
import FormCheckBox from 'shared/components/form/formCheckBox/formCheckBox';
import FormButton from 'shared/components/form/formButton/formButton';
import FormInput from 'shared/components/form/formInput/formInput';
import FormTextArea from 'shared/components/form/formTextArea/formTextArea';
import * as ApiHelpers from 'shared/utils/apiHelper';
import Section from 'shared/components/section/section';
import styles from './mentorRequest.css';

class MentorRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slackUserName: '',
      email: '',
      selectedService: null,
      selectedSkillsets: [],
      mentor: '',
      additionalDetails: '',
      hasRequiredFields: false,
      isMilitaryAffiliated: false,
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
      this.setState({ loadingError: 'There was an error building the form. Please try again.' });
    }
  }

  onSlackUserNameChange = (value) => {
    this.setState({ slackUserName: value }, this.checkForRequiredFields);
  }

  onEmailChange = (value) => {
    this.setState({ email: value }, this.checkForRequiredFields);
  }

  onSelectService = (serviceName) => {
    this.setState({ selectedService: serviceName }, this.checkForRequiredFields);
  }

  onSelectSkillsets = (skillsets) => {
    this.setState({ selectedSkillsets: skillsets });
  }

  onSelectMentor = (mentor) => {
    this.setState({ mentor });
  }

  onAdditionalDetailsChange = (value) => {
    this.setState({ additionalDetails: value });
  }

  onCheckboxChange = (event) => {
    this.setState({ isMilitaryAffiliated: event.target.checked }, this.checkForRequiredFields);
  }

  isValid = () => this.state.hasRequiredFields && this.state.isMilitaryAffiliated;

  checkForRequiredFields = () => {
    const hasRequiredFields = !!this.state.slackUserName
      && !!this.state.email
      && !!this.state.selectedService;

    this.setState({ hasRequiredFields });
  }

  buildOptions = dataset => dataset
    .sort((a, b) => a.name.localeCompare(b.name)) // sort alphabetically
    .map(x => ({ value: x.id, label: x.name }))

  handleOnClick = async (event) => {
    event.preventDefault();

    if (!this.isValid()) return;

    try {
      await ApiHelpers.createMentorRequest({
        slackUser: this.state.slackUserName,
        email: this.state.email,
        serviceIds: this.state.selectedService.value,
        skillsets: this.state.selectedSkillsets ? this.state.selectedSkillsets.map(x => x.label).join(',') : '',
        additionalDetails: this.state.additionalDetails,
        mentorId: this.state.mentor ? this.state.mentor.value : ''
      });

      this.setState({ success: 'Your mentor request has been sent! One of our mentors will contact you within the next few days, so keep an eye on your Slack DMs or email.' });
    } catch (error) {
      /* AIRTABLE MAINTENANCE NOTE:
      The skillsets property that is submitted must contain string values
      that are an exact match for the predefined skillset options on the Airtable
      Mentor Request table, or the request will error out. The skillset FormSelect options that
      a user selects from to set this property are fetched via API from the Airtable Skillsets
      table, which contains exact matches for the predefined skillset options on the Airtable
      Mentor Request table. */
      this.setState({ submitError: 'There was an error requesting a mentor.' });
    }
  }

  render() {
    return (
      <Section className={styles.mentorRequest} title="Mentor Service Request">
        { this.state.loadingError &&
          <div className={styles.error}>{this.state.loadingError}</div>
        }
        { this.state.isLoading &&
          <div className={styles.loadingWrapper}>
            <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />
            <span className={styles.loadingText}>Loading...</span>
          </div> }
        { this.state.success }
        { !this.state.isLoading && !this.state.success &&
          <Form className={styles.form}>
            <p className={styles.intro}>
              Please use this form to schedule a mentorship session.
              Each session is 30 minutes. If you think you&apos;ll need more time,
              please let us know in the additional details field below.
            </p>

            <div className={styles.formBlockNoPrompt}>
              <h2 className={styles.label}>
                Slack User Name
                <small className={styles.subLabel}>(required)</small>
              </h2>
              <FormInput
                id="slackUser"
                onChange={this.onSlackUserNameChange}
              />
            </div>

            <div className={styles.formBlockNoPrompt}>
              <h2 className={styles.label}>
                Email
                <small className={styles.subLabel}>(required)</small>
              </h2>
              <FormInput
                id="email"
                onChange={this.onEmailChange}
              />
            </div>

            <div className={styles.formBlock}>
              <h2 className={styles.label}>
                Service
                <small className={styles.subLabel}>(required)</small>
              </h2>
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
                onChange={e => this.onSelectService(e)}
              />
            </div>

            <div className={styles.formBlock}>
              <h2 className={styles.label}>
                Skillset
              </h2>
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
              <h2 className={styles.label}>
                Mentor
              </h2>
              <p className={styles.prompt}>
                Would you like to pick a specific mentor?
              </p>
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
              <h2 className={styles.label}>
                Additional Details
              </h2>
              <p className={styles.prompt}>
                Please provide us with any more info
                that may help in us in assigning a mentor to this request.
              </p>
              <FormTextArea
                id="additionalDetails"
                onChange={this.onAdditionalDetailsChange}
              />
            </div>

            <div className={styles.formRow}>
              <h2 className={styles.label}>
                Military Affiliation Certification
                <small className={styles.subLabel}>(required)</small>
              </h2>
              <FormCheckBox
                name="militaryAffiliationCertification"
                value="I certify that I am a member of one of the following categories:
                Veteran, Active Duty Military, Military Spouse"
                checked={this.state.isMilitaryAffiliated}
                onChange={this.onCheckboxChange}
                checkBox={{ display: 'flex', alignItems: 'center', margin: '15px 5px' }}
                label={{ marginLeft: '15px' }}
              />
              { this.isValid() ?
                <FormButton className={styles.joinButton} text="Request Mentor" onClick={e => this.handleOnClick(e)} theme="blue" />
                :
                <FormButton className={styles.joinButton} text="Request Mentor" disabled theme="grey" />
              }
              { this.state.submitError &&
                <div className={styles.error}>{this.state.submitError}</div>
              }
            </div>
          </Form>
        }
      </Section>
    );
  }
}

export default MentorRequest;
