import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

const ImmersiveModalExamples = (): JSX.Element => {
  const [defaultModalIsOpen, setDefaultModalIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={(): void => setDefaultModalIsOpen(true)}>
        Open ImmersiveModal
      </Button>
      {defaultModalIsOpen && (
        <ImmersiveModal
          onClose={(): void => setDefaultModalIsOpen(false)}
          footerContent={
            <Button.Container>
              <Button isFullWidth>Update Payment Method</Button>
              <Button isFullWidth buttonType="tertiary">
                Dismiss
              </Button>
            </Button.Container>
          }
        >
          <ImmersiveModal.Title>Immersive modal title</ImmersiveModal.Title>
          <ImmersiveModal.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
          </ImmersiveModal.Body>
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
