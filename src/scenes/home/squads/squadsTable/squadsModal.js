import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import Form from 'shared/components/form/form';
import { joinSquad } from 'shared/utils/apiHelper';
import FormButton from 'shared/components/form/formButton/formButton';
import Section from 'shared/components/section/section';
import styles from './squadsModal.css';

class RequestModal extends Component {
  propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    squad: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  handleButtonClick = () => {
    joinSquad(this.props.squad.id);
    this.props.onRequestClose();
  }

  handleCloseClick = () => {
    this.props.onRequestClose();
  }

  render() {
    const { squad, isOpen } = this.props;
    console.log(squad);
    return (
      <ReactModal isOpen={isOpen} contentLabel="Squad">
        <Section title={squad.name} theme="white">
          <div className={styles.modal}>
            <h2>Leaders</h2>
            {<p>{`${squad.leader.first_name} ${squad.leader.last_name}`}</p>}

            <h2>Mentors</h2>
            {squad.mentors.map(m => <p>{`${m.first_name} ${m.last_name}`}</p>)}

            <h2>Activities</h2>
            <p>{squad.activities}</p>

            <h2>Skill Level</h2>
            <p>{squad.skill_level}</p>

            <h2>Members</h2>
            {<p>{`${squad.minimum}-${squad.maximum}`}</p>}

            <h2>Description</h2>
            <p>{squad.description}</p>

            <h2>Current Members</h2>
            {squad.members.map(m => <p>{`${m.first_name} ${m.last_name}`}</p>)}

            <Form>
              <FormButton
                text="Join Squad"
                onClick={this.handleButtonClick}
                theme="blue"
              />
              <FormButton
                text="Go Back"
                onClick={this.handleCloseClick}
                theme="blue"
              />
            </Form>
          </div>
        </Section>
      </ReactModal>
    );
  }
}

export default RequestModal;
