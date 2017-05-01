import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div className={styles.modalOverlay} />
        <div className={styles.modalWrapper}>
          <div className={styles.modalForm}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired
};

export default Modal;
