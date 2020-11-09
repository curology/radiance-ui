import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';
import {
  ArgsTable,
  Canvas,
  Description,
  Heading,
  Anchor,
  Source,
  Story,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { ANIMATION } from 'src/constants';
import { modalStoryDecoratorForChromatic } from 'stories/utils';

const DIALOG_MODAL_STORY_ID_PREFIX = 'components-dialogmodal--';

export const Default = () => {
  const [openModal, setOpenModal] = useState(false);

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

Default.id = `${DIALOG_MODAL_STORY_ID_PREFIX}default`;
Default.parameters = {
  chromatic: { disable: true },
};

export const DefaultOpened = () => {
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

DefaultOpened.storyName = 'Default (Opened)';
DefaultOpened.decorators = [modalStoryDecoratorForChromatic];

export const WithCloseIcon = () => {
  const [withCloseIcon, setWithCloseIcon] = useState(false);

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

WithCloseIcon.id = `${DIALOG_MODAL_STORY_ID_PREFIX}with-close-icon`;
WithCloseIcon.parameters = {
  chromatic: { disable: true },
};

export const WithCloseIconOpened = () => {
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

WithCloseIconOpened.storyName = 'With Close Icon (Opened)';
WithCloseIconOpened.decorators = [modalStoryDecoratorForChromatic];

export default {
  title: 'Components/DialogModal',
  component: DialogModal,
  parameters: {
    chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) * 25 },
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
          <Heading>Props:</Heading>
          <ArgsTable />
          <Heading>Stories</Heading>
          <Description>
            The below stories are the not-open-by-default versions of the
            modals. We define open stories separately solely for Chromatic
            visual regression testing.
          </Description>
          <Heading>Default</Heading>
          <Canvas>
            <Story id={Default.id} />
          </Canvas>
          <Anchor storyId={Default.id} />
          <Heading>With Close Icon</Heading>
          <Anchor storyId={WithCloseIcon.id} />
          <Canvas>
            <Story id={WithCloseIcon.id} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
