import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';
// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY,
//   Source,
// } from '@storybook/addon-docs/blocks';

export const Default = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <React.Fragment>
      <Button onClick={() => setOpenModal(true)}>open dialog modal</Button>

      {openModal && (
        <DialogModal title="Heads up!">
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <Button.Container>
            <Button isFullWidth onClick={() => setOpenModal(false)}>
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => setOpenModal(false)}
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

export const WithCloseIcon = () => {
  const [withCloseIcon, setWithCloseIcon] = useState(true);

  return (
    <React.Fragment>
      <Button onClick={() => setWithCloseIcon(true)}>with close icon</Button>
      {withCloseIcon && (
        <DialogModal
          title="Heads up!"
          onCloseIconClick={() => setWithCloseIcon(false)}
        >
          <p>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </p>
          <Button.Container>
            <Button isFullWidth onClick={() => setWithCloseIcon(false)}>
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => setWithCloseIcon(false)}
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

export default {
  title: 'DialogModal',
  component: DialogModal,
  parameters: {
    docs: {
      page: null,
      // page: // () => (
      //   <React.Fragment>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Typography.Heading>Usage</Typography.Heading>
      //     <Source
      //       language="tsx"
      //       code="import { DialogModal } from 'radiance-ui';"
      //     />
      //     <ArgsTable />
      //     <Stories
      //       includePrimary
      //       title={<Typography.Heading>Stories</Typography.Heading>}
      //     />
      //   </React.Fragment>
      // ),
    },
  },
};
