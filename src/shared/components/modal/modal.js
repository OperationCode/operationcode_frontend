import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Section from 'shared/components/section/section';
import styles from './modal.css';

const Modal = ({ isOpen, title, onRequestClose, children, width }) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={title}
    shouldCloseOnOverlayClick
    onRequestClose={onRequestClose}
    style={{ content: { width, margin: '0 auto' } }}
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
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  title: PropTypes.string,
  width: PropTypes.string
};

Modal.defaultProps = {
  children: <span />,
  isOpen: false,
  onRequestClose: () => {},
  title: '',
  width: ''
};

export default Modal;
