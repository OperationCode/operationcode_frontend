import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Section from 'shared/components/section/section';
import styles from './modal.css';

const Modal = ({
  isOpen, title, onRequestClose, children
}) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={title}
    shouldCloseOnOverlayClick
    onRequestClose={onRequestClose}
  >
    <Section title={title} theme="white" className={styles.modal}>
      <div className={styles.scrollable}>
        {children}
      </div>
    </Section>
    <button className={styles.close} onClick={() => onRequestClose()} />
  </ReactModal>
);

Modal.propTypes = {
  children: PropTypes.element,
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
