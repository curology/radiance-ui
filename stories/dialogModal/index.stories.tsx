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
import { Meta } from '@storybook/react';
import { useTheme } from '@emotion/react';
import { ANIMATION } from 'src/constants';
import { modalStoryDecoratorForChromatic } from 'stories/utils';

const DIALOG_MODAL_STORY_ID_PREFIX = 'components-dialogmodal--';

export const Default = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        open dialog modal
      </Button>

      {openModal && (
        <DialogModal title="Heads up!">
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setOpenModal(false);
              }}
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
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        open dialog modal
      </Button>

      {openModal && (
        <DialogModal title="Heads up!">
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setOpenModal(false);
              }}
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

export const WithColor = () => {
  const [withColor, setWithColor] = useState(false);
  const theme = useTheme();

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setWithColor(true);
        }}
      >
        open dialog modal
      </Button>

      {withColor && (
        <DialogModal
          title="Heads up!"
          backgroundColor={theme.COLORS.background}
        >
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setWithColor(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setWithColor(false);
              }}
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

WithColor.id = `${DIALOG_MODAL_STORY_ID_PREFIX}with-color`;
WithColor.parameters = {
  chromatic: { disable: true },
};

export const WithColorOpened = () => {
  const [withColor, setWithColor] = useState(true);
  const theme = useTheme();

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setWithColor(true);
        }}
      >
        open dialog modal
      </Button>

      {withColor && (
        <DialogModal
          title="Heads up!"
          backgroundColor={theme.COLORS.background}
        >
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setWithColor(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setWithColor(false);
              }}
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

WithColorOpened.id = `${DIALOG_MODAL_STORY_ID_PREFIX}with-color`;
WithColorOpened.decorators = [modalStoryDecoratorForChromatic];

DefaultOpened.storyName = 'Default (Opened)';
DefaultOpened.decorators = [modalStoryDecoratorForChromatic];

export const WithCloseIcon = () => {
  const [withCloseIcon, setWithCloseIcon] = useState(false);

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setWithCloseIcon(true);
        }}
      >
        with close icon
      </Button>
      {withCloseIcon && (
        <DialogModal
          title="Heads up!"
          onCloseIconClick={() => {
            setWithCloseIcon(false);
          }}
        >
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setWithCloseIcon(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setWithCloseIcon(false);
              }}
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
      <Button
        onClick={() => {
          setWithCloseIcon(true);
        }}
      >
        with close icon
      </Button>
      {withCloseIcon && (
        <DialogModal
          title="Heads up!"
          onCloseIconClick={() => {
            setWithCloseIcon(false);
          }}
        >
          <DialogModal.Paragraph>
            This will remove the cleanser and moisturizer from your free trial,
            too. Just the custom bottle will be sent your way!
          </DialogModal.Paragraph>
          <Button.Container>
            <Button
              isFullWidth
              onClick={() => {
                setWithCloseIcon(false);
              }}
            >
              Yes, remove
            </Button>
            <Button
              isFullWidth
              onClick={() => {
                setWithCloseIcon(false);
              }}
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

const CHROMATIC_OPTIONS = {
  chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) * 25 },
} as const;

interface DialogModalStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const DIALOG_MODAL_STORIES: DialogModalStories = {
  title: 'Components/DialogModal',
  component: DialogModal,
  parameters: {
    ...CHROMATIC_OPTIONS,
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
          <Heading>With Color</Heading>
          <Anchor storyId={WithColor.id} />
          <Canvas>
            <Story id={WithColor.id} />
          </Canvas>
          <Anchor storyId={WithCloseIcon.id} />
          <Heading>With Close Icon</Heading>
          <Canvas>
            <Story id={WithCloseIcon.id} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
};

export default DIALOG_MODAL_STORIES;
