import React, { Component } from 'react';
import ReactModal from 'react-modal';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import Form from 'shared/components/form/form';
import REQUEST_STATUSES from 'shared/constants/status';
import FormButton from 'shared/components/form/formButton/formButton';
import Section from 'shared/components/section/section';
import * as ApiHelpers from 'shared/utils/apiHelper';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import styles from './requestModal.css';

class RequestModal extends Component {
  propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    status: PropTypes.string,
    request: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    mentors: PropTypes.array // eslint-disable-line react/forbid-prop-types
  };

  state = {
    services: [],
    error: false,
    status: false,
    mentor: false,
    sucess: false
  };

  componentDidMount() {
    this.getRequests();
  }

  getRequests = () => {
    ApiHelpers.getServices().then((values) => {
      this.setState({
        services: values
      });
    }).catch(this.setFetchError);
  }

  handleStatusChange = (status) => {
    this.setState({
      status
    });
  }

  handleMentorChange = (mentor) => {
    console.log(mentor);
    this.setState({
      mentor
    });
  }

  handleButtonClick = () => {
    const { status, mentor } = this.state;
    ApiHelpers.updateRequest({
      request: this.props.request.id,
      status,
      mentor
    }).then(() => {
      this.setState({ success: true });
      this.props.onRequestClose();
    }).catch(() => {
      this.setState({ error: 'There was an error updating the request status.' });
    });
  }

  render() {
    const { request, ...props } = this.props;
    if (!request) return null;
    const { language, user, service, requested_mentor: mentor } = request;
    const mentorName = mentor ? `${mentor.first_name} ${mentor.last_name}` : 'N/A';
    return (
      <ReactModal {...props} isOpen={this.props.isOpen && !!request} contentLabel="request">
        <Section title={user.slack_name} theme="white" className={styles.modal}>

          <h2>Name</h2>
          <p>{`${user.first_name} ${user.last_name || ''}`}</p>

          <h2>Service</h2>
          <p>{service.name}</p>

          <h2>Email</h2>
          <p>{user.email}</p>

          <h2>Language</h2>
          <p>{language}</p>

          <h2>Mentor Requested</h2>
          <p>{mentorName}</p>

          <h2>Details</h2>
          <p>{request.details}</p>

          <h2>Created At</h2>
          <p>{dateFormat(request.created_at, 'fullDate')}</p>

          <Form className={styles.signupForm}>
            <FormSelect
              id="status"
              options={REQUEST_STATUSES}
              prompt="choose a status"
              onChange={e => this.handleStatusChange(e.target.value)}
            />
            <FormSelect
              id="mentor"
              options={this.props.mentors}
              prompt="choose a mentor"
              onChange={e => this.handleMentorChange(e.target.value)}
            />
            <FormButton
              className={styles.joinButton}
              text="Update Request"
              onClick={this.handleButtonClick}
              theme="blue"
            />
          </Form>
        </Section>
      </ReactModal>
    );
  }
}

export default RequestModal;
