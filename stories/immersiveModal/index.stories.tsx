import React, { useState } from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Canvas,
  Anchor,
  Title,
} from '@storybook/addon-docs/blocks';
import { Button, ImmersiveModal } from 'src/shared-components';
import type { Meta } from '@storybook/react';
import { ANIMATION } from 'src/constants';

import headerImage from './headerImage.jpg';

const IMMERSIVE_MODAL_STORY_ID_PREFIX = 'components-immersivemodal--';

export const WithFooterButtons = ({ isOpen = true }) => {
  const [withButtons, setWithButtons] = useState(isOpen);

  const onClick = () => setWithButtons(true);
  const onClose = () => setWithButtons(false);

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithFooterButtons.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-footer-buttons`;

export const WithHeaderImage = ({ isOpen = true }) => {
  const [withImageHeader, setWithImageHeader] = useState(isOpen);

  const onClick = () => setWithImageHeader(true);
  const onClose = () => setWithImageHeader(false);

  return (
    <React.Fragment>
      <Button onClick={onClick}>with image as header</Button>
      {withImageHeader && (
        <ImmersiveModal
          onClose={onClose}
          headerImage={<img src={headerImage} alt="header" />}
          title="With image as header"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at velit voluptatem, delectus earum sapiente accusantium asperiores
            incidunt assumenda voluptatibus laudantium nulla explicabo labore
            aut distinctio quibusdam deleniti. Tenetur, quas?
          </p>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithHeaderImage.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-header-image`;

export const WithScrollingContent = ({ isOpen = true }) => {
  const [withScrolling, setWithScrolling] = useState(isOpen);

  const onClick = () => setWithScrolling(true);
  const onClose = () => setWithScrolling(false);

  return (
    <React.Fragment>
      <Button onClick={onClick}>with scrolling content</Button>
      {withScrolling && (
        <ImmersiveModal onClose={onClose} title="Immersive modal title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            explicabo magni, sequi similique nisi ab. Culpa, debitis? Quibusdam
            porro accusamus asperiores. Et ab nobis saepe optio hic eveniet
            consectetur error?
          </p>
        </ImmersiveModal>
      )}
    </React.Fragment>
  );
};

WithScrollingContent.id = `${IMMERSIVE_MODAL_STORY_ID_PREFIX}with-scrolling-content`;

export default {
  title: 'Components/ImmersiveModal',
  component: ImmersiveModal,
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
            code={"import { ImmersiveModal } from 'radiance-ui';"}
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
          <Heading>With Footer Buttons</Heading>
          <Canvas>
            <WithFooterButtons isOpen={false} />
          </Canvas>
          <Anchor storyId={WithFooterButtons.id} />
          <Heading>With Header Image</Heading>
          <Anchor storyId={WithHeaderImage.id} />
          <Canvas>
            <WithHeaderImage isOpen={false} />
          </Canvas>
          <Heading>With Scrolling Content</Heading>
          <Anchor storyId={WithScrollingContent.id} />
          <Canvas>
            <WithScrollingContent isOpen={false} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
