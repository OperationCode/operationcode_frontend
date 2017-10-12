import React, { Component } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import Form from 'shared/components/form/form';
import REQUEST_STATUSES from 'shared/constants/status';
import FormButton from 'shared/components/form/formButton/formButton';
import Modal from 'shared/components/modal/modal';
import * as ApiHelpers from 'shared/utils/apiHelper';
import FormSelect from 'shared/components/form/formSelect/formSelect';
import styles from 'shared/components/modal/modal.css';

class RequestModal extends Component {
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
    const { request } = this.props;
    if (!request) return null;
    const {
      language, user, service, requested_mentor: mentor
    } = request;
    const mentorName = mentor ? `${mentor.first_name} ${mentor.last_name}` : 'N/A';
    return (
      <Modal
        isOpen={this.props.isOpen && !!request}
        title={user.slack_name}
        onRequestClose={this.props.onRequestClose}
      >
        <Form className={styles.modalFlex}>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Name</h2>
              <p>{`${user.first_name} ${user.last_name || ''}`}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Service</h2>
              <p>{service.name}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Email</h2>
              <p>{user.email}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Choose a status</h2>
              <FormSelect
                id="status"
                options={REQUEST_STATUSES}
                prompt=""
                onChange={e => this.handleStatusChange(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Language</h2>
              <p>{language}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Mentor Requested</h2>
              <p>{mentorName}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Created At</h2>
              <p>{dateFormat(request.created_at, 'fullDate')}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Self-assign or choose a mentor</h2>
              <FormSelect
                id="mentor"
                options={this.props.mentors}
                prompt=""
                onChange={e => this.handleMentorChange(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.modalRow}>
            <h2>Details</h2>
            <p>{request.details}</p>
          </div>
          <FormButton
            className={styles.joinButton}
            text="Update Request"
            onSubmit={this.handleButtonClick}
            theme="blue"
          />
        </Form>
      </Modal>
    );
  }
}

RequestModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  request: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  mentors: PropTypes.array // eslint-disable-line react/forbid-prop-types
};

RequestModal.defaultProps = {
  isOpen: false,
  onRequestClose: () => {},
  request: null,
  mentors: null
};

export default RequestModal;
