import React, { useState } from 'react';
import {
  Anchor,
  ArgsTable,
  Canvas,
  Description,
  Heading,
  Source,
  Story,
  Title,
} from '@storybook/addon-docs';
import { Button, ImmersiveModal } from 'src/shared-components';
import { ANIMATION } from 'src/constants';
import { modalStoryDecoratorForChromatic } from 'stories/utils';
import type { Meta } from '@storybook/react';

import headerImage from './headerImage.jpg';

const IMMERSIVE_MODAL_STORY_ID_PREFIX = 'components-immersivemodal--';

const LoremIpsumMarkup = () => (
  <ImmersiveModal.Paragraph>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo
    magni, sequi similique nisi ab. Culpa, debitis? Quibusdam porro accusamus
    asperiores. Et ab nobis saepe optio hic eveniet consectetur error?
  </ImmersiveModal.Paragraph>
);

const LoremIpsumBlock = ({ repeat = 1 }) => (
  <React.Fragment>
    {new Array(repeat).fill(LoremIpsumMarkup).map((El, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <El key={repeat - idx} />
    ))}
  </React.Fragment>
);

export const WithFooterButtons = () => {
  const [withButtons, setWithButtons] = useState(false);

  const onClick = () => {
    setWithButtons(true);
  };
  const onClose = () => {
    setWithButtons(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with footer buttons</Button>
      {withButtons && (
        <ImmersiveModal
          onClose={onClose}
          footerContent={
            <Button.Container>
              <Button isFullWidth onClick={onClose}>
                cta content
              </Button>
            </Button.Container>
          }
          title="Immersive modal title"
        >
          <LoremIpsumBlock />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithFooterButtons.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-footer-buttons`;
WithFooterButtons.parameters = {
  chromatic: { disable: true },
};

export const WithFooterButtonsOpened = () => {
  const [withButtons, setWithButtons] = useState(true);

  const onClick = () => {
    setWithButtons(true);
  };
  const onClose = () => {
    setWithButtons(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with footer buttons</Button>
      {withButtons && (
        <ImmersiveModal
          onClose={onClose}
          footerContent={
            <Button.Container>
              <Button isFullWidth onClick={onClose}>
                cta content
              </Button>
            </Button.Container>
          }
          title="Immersive modal title"
        >
          <LoremIpsumBlock />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithFooterButtonsOpened.storyName = 'With Footer Buttons (Opened)';
WithFooterButtonsOpened.decorators = [modalStoryDecoratorForChromatic];

export const WithHeaderImage = () => {
  const [withImageHeader, setWithImageHeader] = useState(false);

  const onClick = () => {
    setWithImageHeader(true);
  };
  const onClose = () => {
    setWithImageHeader(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with image as header</Button>
      {withImageHeader && (
        <ImmersiveModal
          onClose={onClose}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
        >
          <LoremIpsumBlock repeat={8} />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithHeaderImage.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-header-image`;
WithHeaderImage.parameters = {
  chromatic: { disable: true },
};

export const WithHeaderImageOpened = () => {
  const [withImageHeader, setWithImageHeader] = useState(true);

  const onClick = () => {
    setWithImageHeader(true);
  };
  const onClose = () => {
    setWithImageHeader(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with image as header</Button>
      {withImageHeader && (
        <ImmersiveModal
          onClose={onClose}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
        >
          <LoremIpsumBlock repeat={8} />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithHeaderImageOpened.storyName = 'With Header Image (Opened)';
WithHeaderImageOpened.decorators = [modalStoryDecoratorForChromatic];

export const WithScrollingContent = () => {
  const [withScrolling, setWithScrolling] = useState(false);

  const onClick = () => {
    setWithScrolling(true);
  };
  const onClose = () => {
    setWithScrolling(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with scrolling content</Button>
      {withScrolling && (
        <ImmersiveModal onClose={onClose} title="Immersive modal title">
          <LoremIpsumBlock repeat={16} />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithScrollingContent.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-scrolling-content`;
WithScrollingContent.parameters = {
  chromatic: { disable: true },
};

export const WithScrollingContentOpened = () => {
  const [withScrolling, setWithScrolling] = useState(true);

  const onClick = () => {
    setWithScrolling(true);
  };
  const onClose = () => {
    setWithScrolling(false);
  };

  return (
    <React.Fragment>
      <Button onClick={onClick}>with scrolling content</Button>
      {withScrolling && (
        <ImmersiveModal onClose={onClose} title="Immersive modal title">
          <LoremIpsumBlock repeat={16} />
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithScrollingContentOpened.storyName = 'With Scrolling Content (Opened)';
WithScrollingContentOpened.decorators = [modalStoryDecoratorForChromatic];

const CHROMATIC_OPTIONS = {
  chromatic: { delay: parseInt(ANIMATION.defaultTiming, 10) * 15 },
} as const;

interface ImmersiveModalStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const IMMERSIVE_MODALS_STORIES: ImmersiveModalStories = {
  title: 'Components/ImmersiveModal',
  component: ImmersiveModal,
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
            code={"import { ImmersiveModal } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Heading>Stories</Heading>
          <Description>
            The below stories are the not-open-by-default versions of the
            modals. We define open stories separately solely for Chromatic
            visual regression testing.
          </Description>
          <Heading>With Footer Buttons</Heading>
          <Canvas>
            <Story id={WithFooterButtons.id} />
          </Canvas>
          <Anchor storyId={WithFooterButtons.id} />
          <Heading>With Header Image</Heading>
          <Anchor storyId={WithHeaderImage.id} />
          <Canvas>
            <Story id={WithHeaderImage.id} />
          </Canvas>
          <Heading>With Scrolling Content</Heading>
          <Anchor storyId={WithScrollingContent.id} />
          <Canvas>
            <Story id={WithScrollingContent.id} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
};

export default IMMERSIVE_MODALS_STORIES;
