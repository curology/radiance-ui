import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';
import {
  ArgsTable,
  Canvas,
  Description,
  Heading,
  Primary,
  Source,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';

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

export const WithCloseIcon = ({ isOpen = true }) => {
  const [withCloseIcon, setWithCloseIcon] = useState(isOpen);

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
  title: 'Components/DialogModal',
  component: DialogModal,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { DialogModal } from 'radiance-ui';"}
          />
          <Primary />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Heading>Stories</Heading>
          <Heading>With Close Icon</Heading>
          <Description>
            (Source code available within Canvas story Story add-ons tab)
          </Description>
          <Canvas>
            <WithCloseIcon isOpen={false} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
