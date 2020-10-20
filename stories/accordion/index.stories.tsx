import React, { useState } from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Title,
  Anchor,
  Canvas,
  Story,
} from '@storybook/addon-docs/blocks';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import accountImage from 'shared/account.png';
import personImage from 'shared/person.jpg';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Accordion } from 'src/shared-components';
import type { Meta } from '@storybook/react';

const ACCORDION_STORY_ID_PREFIX = 'components-accordion--';

export const Standard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>
            This is styled with Accordion.Content
          </Accordion.Content>
        }
        isOpen={isOpen}
        onClick={toggleAccordion}
      >
        <Accordion.Content>
          Accordion.Content adds standard accordion padding.
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

export const NoBorder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is Accordion with noBorder</Accordion.Content>
        }
        noBorder
        isOpen={isOpen}
        onClick={onClick}
      >
        <Accordion.Content>
          This is styled with Accordion.Content
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

NoBorder.id = `${ACCORDION_STORY_ID_PREFIX}no-border`;

export const Disabled = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is a disabled accordion</Accordion.Content>
        }
        isOpen={isOpen}
        onClick={onClick}
        disabled
      >
        <Accordion.Content>Expandable</Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

Disabled.id = `${ACCORDION_STORY_ID_PREFIX}disabled`;

export const RightAlignedArrow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is a right aligned arrow</Accordion.Content>
        }
        isOpen={isOpen}
        onClick={toggleAccordion}
        rightAlignArrow
      >
        <Accordion.Content>
          Accordion.Content adds standard accordion padding.
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

RightAlignedArrow.id = `${ACCORDION_STORY_ID_PREFIX}right-aligned-arrow`;

export const WithControls = () => (
  <Accordion.Container>
    <Accordion
      title={
        <Accordion.Content>
          <Accordion.Truncate>{text('Title text', 'Title')}</Accordion.Truncate>
        </Accordion.Content>
      }
      onClick={action('Accordion clicked')}
      isOpen={boolean('isOpen', false)}
      noBorder={boolean('noBorder', false)}
      disabled={boolean('disabled', false)}
      rightAlignArrow={boolean('rightAlignArrow', false)}
    >
      <Accordion.Content>
        {text('Expanded text', 'Accordion expanded content')}
      </Accordion.Content>
    </Accordion>
  </Accordion.Container>
);

WithControls.id = `${ACCORDION_STORY_ID_PREFIX}with-controls`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${SPACER.medium} ${SPACER.large};
  padding-right: 0;
  width: 100%;
  min-height: ${SPACER.x4large};
`;

const AccordionSpacer = styled.div`
  margin: 1rem 0;
`;

export const Thumbnails = () => {
  const [isOpen, setIsOpen] = useState({
    0: false,
    1: false,
    2: false,
  });

  const toggleAccordion = (num: number) => () =>
    setIsOpen({ ...isOpen, [num]: !isOpen[num] });

  const srcs = [personImage, accountImage, personImage];

  return (
    <React.Fragment>
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>One Image</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs.slice(0, 1)} />
            </TitleWrapper>
          }
          isOpen={isOpen[0]}
          onClick={toggleAccordion(0)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
      <AccordionSpacer />
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>Two Images</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs.slice(0, 2)} />
            </TitleWrapper>
          }
          isOpen={isOpen[1]}
          onClick={toggleAccordion(1)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
      <AccordionSpacer />
      <Accordion.Container>
        <Accordion
          title={
            <TitleWrapper>
              <Accordion.Truncate>Three Images</Accordion.Truncate>
              <Accordion.Thumbnails photoSrcs={srcs} />
            </TitleWrapper>
          }
          isOpen={isOpen[2]}
          onClick={toggleAccordion(2)}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
    </React.Fragment>
  );
};

Thumbnails.id = `${ACCORDION_STORY_ID_PREFIX}thumbnails`;

export const Truncate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <div style={{ width: '400px' }}>
      <Accordion.Container>
        <Accordion
          title={
            <Accordion.Content>
              <Accordion.Truncate>
                This uses Accordion.Truncate to shorten long text.
              </Accordion.Truncate>
            </Accordion.Content>
          }
          isOpen={isOpen}
          onClick={onClick}
        >
          <Accordion.Content>
            Accordion.Truncate is a wrapper that will cut off any text (direct
            children only) with an added ellipsis and prevents line wrapping.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
    </div>
  );
};

Truncate.id = `${ACCORDION_STORY_ID_PREFIX}truncate`;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Accordion } from 'radiance-ui';"}
          />
          <Primary />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Heading>Stories</Heading>
          <Anchor storyId={NoBorder.id} />
          <Heading>No Border</Heading>
          <Description>
            This accordion style permits usage without the border typically
            found on the accordion
          </Description>
          <Canvas>
            <Story id={NoBorder.id} />
          </Canvas>
          <Anchor storyId={Disabled.id} />
          <Heading>Disabled</Heading>
          <Description>
            The disabled accordion should only be used when the user is taking a
            clearly defined action in a series of tasks. A good example of this
            component is the photo uploader in the sign up flow. Accordion
            blocks which represent specific photos the user takes, remain
            disabled and closed until the respective steps are reached. The user
            is then auto-advanced through each accordion block.
          </Description>
          <Canvas>
            <Story id={Disabled.id} />
          </Canvas>
          <Anchor storyId={RightAlignedArrow.id} />
          <Heading>Right-aligned Arrow</Heading>
          <Canvas>
            <Story id={RightAlignedArrow.id} />
          </Canvas>
          <Anchor storyId={WithControls.id} />
          <Heading>With Controls</Heading>
          <Canvas>
            <Story id={WithControls.id} />
          </Canvas>
          <Heading>Subcomponents</Heading>
          <Description>
            The `Accordion` component has subcomponents available through dot
            notation.
          </Description>
          <Anchor storyId={Thumbnails.id} />
          <Heading>Accordion.Thumbnails</Heading>
          <Description>
            The accordion style renders thumbnail images into the right hand
            side of the accordion header title bar. These thumbnail images
            represent images actually found in the `content` section of the
            accordion.
          </Description>
          <Description>- **1 image:** Renders thumbnail of image</Description>
          <Description>
            - **2 images:** Renders thumbnails of both images
          </Description>
          <Description>
            - **3+ images:** Renders thumbnail of first image and a counter of
            additional images
          </Description>
          <Canvas>
            <Story id={Thumbnails.id} />
          </Canvas>
          <Heading>Accordion.Thumbnails Props</Heading>
          <ArgsTable of={Accordion.Thumbnails} />
          <Heading>Accordion.Container</Heading>
          <Description>Container to hold instances of `Accordion`</Description>
          <Canvas>
            <Accordion.Container>
              <Accordion
                onClick={() => undefined}
                title={
                  <Accordion.Content>
                    This Accordion styled with an Accordion.Container parent
                    component
                  </Accordion.Content>
                }
                isOpen
              >
                <Accordion.Content>
                  This Accordion styled with an Accordion.Container parent
                  component
                </Accordion.Content>
              </Accordion>
            </Accordion.Container>
          </Canvas>
          <Heading>Accordion.Content</Heading>
          <Description>Wraps padding around children nodes</Description>
          <Canvas>
            <Accordion.Container>
              <Accordion
                onClick={() => undefined}
                title={<Accordion.Content>Title</Accordion.Content>}
                isOpen={false}
              >
                <Accordion.Content>
                  Expansion with content padding
                </Accordion.Content>
              </Accordion>
              <Accordion
                onClick={() => undefined}
                title={<Accordion.Content>Title (open)</Accordion.Content>}
                isOpen
              >
                <Accordion.Content>
                  Expansion with content padding
                </Accordion.Content>
              </Accordion>
            </Accordion.Container>
          </Canvas>
          <Anchor storyId={Truncate.id} />
          <Heading>Accordion.Truncate</Heading>
          <Description>
            Prevents line-wrapping and shortens text with an ellipsis. Note: The
            ellipsis will only be added if the text is a direct child.
          </Description>
          <Canvas>
            <Story id={Truncate.id} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
