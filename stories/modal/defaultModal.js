import React from 'react';

import Modal from 'src/shared-components/modal';
import Button from 'src/shared-components/button';

class DefaultModal extends React.Component {
  state = {
    isOpen: false,
  };

  onOpenModal = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Button onClick={this.onOpenModal}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={this.onClose}>
          <Modal.ContentContainer>
            <Modal.Title>This is styled with ModalTitle</Modal.Title>
            <Modal.Body>This is styled with ModalBody.</Modal.Body>
            <Modal.Footer>
              This is styled with ModalFooter. It gives us a padding to separate
              from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close Modal</Button>
              </Button.Container>
            </Modal.Footer>
          </Modal.ContentContainer>
        </Modal>
        <br />
      </div>
    );
  }
}

export default DefaultModal;
