import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'shared/components/modal/modal';
import styles from 'shared/components/modal/modal.css';

class MentorDetails extends Component {

  state = {
    fetchingMessage: null,
    mentor: null
  };

  render() {
    const { mentor, isOpen } = this.props;
    if (!this.props.mentor) return null;

    return (
      <Modal
        isOpen={isOpen}
        title={`${mentor.first_name} ${mentor.last_name}`}
        onRequestClose={this.props.onRequestClose}
      >
        <div className={styles.modalFlex}>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Name:</h2>
              <p>{`${mentor.first_name} ${mentor.last_name}`}</p>
            </div>
            <div className={styles.modalRow}>
              <h2>Location:</h2>
              <p>{mentor.zip}</p>
            </div>
          </div>
          <div className={styles.modalBlock}>
            <div className={styles.modalRow}>
              <h2>Slack:</h2>
              <p>{mentor.slack_name}</p>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

MentorDetails.defaultProps = {
  isOpen: false,
  onRequestClose: () => {},
  mentor: null
};

MentorDetails.propTypes = {
  mentor: PropTypes.shape({
    email: PropTypes.string,
    first_name: PropTypes.string,
    id: PropTypes.number.isRequired,
    last_name: PropTypes.string,
  }),
  onRequestClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default MentorDetails;
