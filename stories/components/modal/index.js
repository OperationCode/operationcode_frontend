import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Modal from 'shared/components/modal/modal';

class ComponentWithModal extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpened: false,
    };
  }

  handleOpen = () => {
    this.setState({ isModalOpened: true });
  }

  handleClose = () => {
    this.setState({ isModalOpened: false });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.handleOpen}
        >
          Open Modal
        </button>
        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={this.handleClose}
          title="Title"
        >
          <span>This is modal content</span>
        </Modal>
      </div>
    );
  }
}

storiesOf('shared/components/modal', module)
  .add('Default', () => (
    <ComponentWithModal />
  ));
