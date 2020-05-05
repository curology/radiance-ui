import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

const ImmersiveModalExamples = (): JSX.Element => {
  const [defaultModalIsOpen, setDefaultModalIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={(): void => setDefaultModalIsOpen(true)}>
        Open ImmersiveModal
      </Button>
      {defaultModalIsOpen && (
        <ImmersiveModal onClose={(): void => setDefaultModalIsOpen(false)}>
          <ImmersiveModal.Title>
            This is styled with ImmersiveModal.Title
          </ImmersiveModal.Title>
          <ImmersiveModal.Body>
            This is styled with ImmersiveModal.Body.
          </ImmersiveModal.Body>
          <ImmersiveModal.Footer>
            This is styled with ImmersiveModal.Footer. It gives us a padding to
            separate from the body.
          </ImmersiveModal.Footer>
        </ImmersiveModal>
      )}
      {/* <br />
        <Button onClick={() => this.onOpenModalWithHeader('header')}>
          Open ImmersiveModal with Header
        </Button>
        {modalWithHeader && (
          <ImmersiveModal onClose={this.onClose} header={<HeaderImage />}>
            <ImmersiveModal.Title>
              This is styled with ImmersiveModal.Title
            </ImmersiveModal.Title>
            <ImmersiveModal.Body>
              This is styled with ImmersiveModal.Body
            </ImmersiveModal.Body>
            <ImmersiveModal.Footer>
              This is styled with ImmersiveModal.Footer. It gives us a padding
              to separate from the body.
              <Button.Container>
                <Button onClick={this.onClose}>Close ImmersiveModal</Button>
              </Button.Container>
            </ImmersiveModal.Footer>
          </ImmersiveModal>
        )} */}
    </div>
  );
};

export default ImmersiveModalExamples;
