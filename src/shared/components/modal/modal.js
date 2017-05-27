import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Section from 'shared/components/section/section';
import styles from './modal.css';

class Modal extends Component {

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel={this.props.title}
        shouldCloseOnOverlayClick
        onRequestClose={this.props.onRequestClose}
      >
        <Section title={this.props.title} theme="white" className={styles.modal}>
          <div className={styles.scrollable}>
            {this.props.children}
          </div>
        </Section>
        <button className={styles.close} onClick={() => this.props.onRequestClose()} />
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  title: PropTypes.string
};

Modal.defaultProps = {
  children: <span />,
  isOpen: false,
  onRequestClose: () => {},
  title: ''
};

export default Modal;
