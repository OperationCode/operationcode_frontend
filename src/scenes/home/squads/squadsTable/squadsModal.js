import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'shared/components/form/form';
import { joinSquad } from 'shared/utils/apiHelper';
import FormButton from 'shared/components/form/formButton/formButton';
import Modal from 'shared/components/modal/modal';
import styles from 'shared/components/modal/modal.css';

class RequestModal extends Component {
  propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    handleFormUpdate: PropTypes.func,
    squad: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  handleButtonClick = () => {
    joinSquad(this.props.squad.id);
    this.props.handleFormUpdate();
    this.props.onRequestClose();
  }

  handleCloseClick = () => {
    this.props.onRequestClose();
  }

  render() {
    const { squad, isOpen } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        title={squad.name}
        onRequestClose={this.props.onRequestClose}
      >
        <Form className={styles.modalFlex}>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Leaders</h2>
              {<p>{`${squad.leader.first_name} ${squad.leader.last_name}`}</p>}
            </div>
            <div className={styles.modalRow}>
              <h2>Mentors</h2>
              {squad.mentors.map(m => <p>{`${m.first_name} ${m.last_name}`}</p>)}
            </div>
            <div className={styles.modalRow}>
              <h2>Activities</h2>
              <p>{squad.activities}</p>
            </div>
          </div>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Skill Level</h2>
              <p>{squad.skill_level}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Members</h2>
              {<p>{`${squad.minimum}-${squad.maximum}`}</p>}
            </div>
            <div className={styles.modalRow}>
              <h2>Current Members</h2>
              {squad.members.map(m => <p>{`${m.first_name} ${m.last_name}`}</p>)}
            </div>
          </div>
          <div className={styles.modalRow}>
            <h2>Description</h2>
            <p>{squad.description}</p>
          </div>
          <FormButton
            text="Join Squad"
            onClick={this.handleButtonClick}
            theme="blue"
            className={styles.joinButton}
          />
          <FormButton
            text="Go Back"
            onClick={this.handleCloseClick}
            theme="blue"
            className={styles.joinButton}
          />
        </Form>
      </Modal>
    );
  }
}

export default RequestModal;
