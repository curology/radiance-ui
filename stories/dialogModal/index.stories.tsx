import React, { useState } from 'react';
import { DialogModal, Button } from 'src/shared-components';
import {
  ArgsTable,
  Canvas,
  Description,
  Heading,
  Anchor,
  Source,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { ANIMATION } from 'src/constants';

const DIALOG_MODAL_STORY_ID_PREFIX = 'components-dialogmodal--';

export const Default = ({ isOpen = true }) => {
  const [openModal, setOpenModal] = useState(isOpen);

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

WithCloseIcon.id = `${DIALOG_MODAL_STORY_ID_PREFIX}with-close-icon`;

export default {
  title: 'Components/DialogModal',
  component: DialogModal,
  decorators: [
    (storyFn) => (
      <div style={{ width: '1200px', height: '800px' }}>{storyFn()}</div>
    ),
  ],
  parameters: {
    chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) * 15 },
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
            Source code for the stories can be found in the individual story
            canvas tabs. Keeping the modals closed-by-default on the docs page
            (unlike the open-by-default configuration on the canvas pages)
            interferes with Storybook source inference.
          </Description>
          <Heading>Default</Heading>
          <Canvas>
            <Default isOpen={false} />
          </Canvas>
          <Anchor storyId={Default.id} />
          <Heading>With Close Icon</Heading>
          <Anchor storyId={WithCloseIcon.id} />
          <Canvas>
            <WithCloseIcon isOpen={false} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
