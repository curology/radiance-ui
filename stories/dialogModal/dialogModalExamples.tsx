import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';

const DialogModalExamples = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [withCloseIcon, setWithCloseIcon] = useState(false);

  return (
    <React.Fragment>
      {/* Default Dialog Modal */}
      <Button onClick={(): void => setOpenModal(true)}>
        open dialog modal
      </Button>
      {openModal && (
        <DialogModal title="Heads up!">
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <Button.Container>
            <Button isFullWidth onClick={(): void => setOpenModal(false)}>
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={(): void => setOpenModal(false)}
              buttonType="tertiary"
            >
              never mind
            </Button>
          </Button.Container>
        </DialogModal>
      )}
      <br />
      <br />
      {/* With Close Icon */}
      <Button onClick={(): void => setWithCloseIcon(true)}>
        with close icon
      </Button>
      {withCloseIcon && (
        <DialogModal
          title="Heads up!"
          onCloseIconClick={(): void => setWithCloseIcon(false)}
        >
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <Button.Container>
            <Button isFullWidth onClick={(): void => setWithCloseIcon(false)}>
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={(): void => setWithCloseIcon(false)}
              buttonType="tertiary"
            >
              never mind
            </Button>
          </Button.Container>
        </DialogModal>
      )}
    </React.Fragment>
  );
};

export default DialogModalExamples;
