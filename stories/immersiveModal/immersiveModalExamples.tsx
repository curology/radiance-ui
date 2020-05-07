import React, { useState } from 'react';
import { ImmersiveModal, Button } from 'src/shared-components';

import headerImage from './headerImage.jpg';

const ImmersiveModalExamples = (): JSX.Element => {
  const [defaultIsOpen, setDefaultIsOpen] = useState(false);
  const [headerImageIsOpen, setheaderImageIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* DEFAULT MODAL */}
      <Button onClick={(): void => setDefaultIsOpen(true)}>
        Open standard modal
      </Button>
      {defaultIsOpen && (
        <ImmersiveModal
          onClose={(): void => setDefaultIsOpen(false)}
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel,
              maiores atque sapiente hic recusandae, dicta iure odit architecto
              aperiam alias molestiae eius cum? Rerum molestias fuga
              accusantium? Quos, harum.
            </p>
          </ImmersiveModal.Body>
        </ImmersiveModal>
      )}
      <br />
      <br />
      {/* MODAL WITH HEADER */}
      <Button onClick={(): void => setheaderImageIsOpen(true)}>
        Open with image as header
      </Button>
      {headerImageIsOpen && (
        <ImmersiveModal
          onClose={(): void => setheaderImageIsOpen(false)}
          headerImage={<img src={headerImage} alt="header" />}
        >
          <ImmersiveModal.Title>With image as header</ImmersiveModal.Title>
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
          </ImmersiveModal.Body>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

export default ImmersiveModalExamples;
