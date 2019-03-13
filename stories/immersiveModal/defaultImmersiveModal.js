import React from 'react';
import { css } from '@emotion/core';

import { ImmersiveModal, Button } from 'src/shared-components';
import { COLORS } from 'src/constants';

const HeaderImage = () => (
  <div
    css={css`
      height: 8rem;
      background-color: ${COLORS.lavender100};
      padding: 2rem;
    `}
  >
    This is a placeholder for an optional header image.
  </div>
);

class DefaultImmersiveModal extends React.Component {
  state = {
    defaultIsOpen: false,
    headerIsOpen: false,
    mediumIsOpen: false,
  };

  onOpenModal = modal => this.setState({ [`${modal}IsOpen`]: true });

  onClose = () => this.setState({
    defaultIsOpen: false,
    headerIsOpen: false,
    mediumIsOpen: false,
  });

  render() {
    const { defaultIsOpen, headerIsOpen, mediumIsOpen} = this.state;

    return (
      <div>
        <Button onClick={() => this.onOpenModal('default')}>Open ImmersiveModal</Button>
        {defaultIsOpen && (
          <ImmersiveModal onClose={this.onClose}>
            <ImmersiveModal.Title>This is styled with ImmersiveModal.Title</ImmersiveModal.Title>
            <ImmersiveModal.Body>This is styled with ImmersiveModal.Body.</ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding to separate
              from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )}
        <br />
        <Button onClick={() => this.onOpenModal('header')}>
          Open ImmersiveModal with Header
        </Button>
        {headerIsOpen && (
          <ImmersiveModal
            onClose={this.onClose}
            header={<HeaderImage />}
          >
            <ImmersiveModal.Title>This is styled with ImmersiveModal.Title</ImmersiveModal.Title>
            <ImmersiveModal.Body>This is styled with ImmersiveModal.Body</ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding to separate
              from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )}
        <br/>
        <Button onClick={() => this.onOpenModal('medium')}>
          Open medium width ImmersiveModal
        </Button>
        {mediumIsOpen && (
          <ImmersiveModal onClose={this.onClose} width="medium">
            <ImmersiveModal.Title>This is styled with ImmersiveModal.Title</ImmersiveModal.Title>
            <ImmersiveModal.Body>This is styled with ImmersiveModal.Body.</ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding to separate
              from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )}        
      </div>
    );
  }
}

export default DefaultImmersiveModal;
