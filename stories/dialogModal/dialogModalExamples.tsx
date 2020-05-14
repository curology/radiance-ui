import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';

const DialogModalExamples = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default DialogModalExamples;
