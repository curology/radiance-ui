import React, { useReducer, useState } from 'react';
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
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import accountImage from 'shared/account.png';
import personImage from 'shared/person.jpg';
import { Accordion } from 'src/shared-components';
import type { Meta } from '@storybook/react';

const ACCORDION_SUBCOMPONENTS_STORY_ID_PREFIX =
  'components-accordion-subcomponents--';

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

  const toggleAccordion = (num: keyof typeof isOpen) => () => {
    setIsOpen({ ...isOpen, [num]: !isOpen[num] });
  };

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

Thumbnails.id = `${ACCORDION_SUBCOMPONENTS_STORY_ID_PREFIX}thumbnails`;

export const Truncate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

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

Truncate.id = `${ACCORDION_SUBCOMPONENTS_STORY_ID_PREFIX}truncate`;

export const Container = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion.Container>
      <Accordion
        onClick={onClick}
        title={
          <Accordion.Content>
            This Accordion styled with an Accordion.Container parent component
          </Accordion.Content>
        }
        isOpen={isOpen}
      >
        <Accordion.Content>
          This Accordion styled with an Accordion.Container parent component
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

Container.id = `${ACCORDION_SUBCOMPONENTS_STORY_ID_PREFIX}container`;

export const Content = () => {
  const initialState = {
    first: true,
    second: false,
  };

  const reducer = (
    state: typeof initialState,
    action: keyof typeof initialState,
  ) => {
    switch (action) {
      case 'first':
        return { ...state, first: !state.first };
      case 'second':
        return { ...state, second: !state.second };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleAccordion = (accordion: keyof typeof initialState) => () => {
    dispatch(accordion);
  };

  return (
    <Accordion.Container>
      <Accordion
        onClick={toggleAccordion('first')}
        title={<Accordion.Content>Title (defaulted open)</Accordion.Content>}
        isOpen={state.first}
      >
        <Accordion.Content>Expansion with content padding</Accordion.Content>
      </Accordion>
      <Accordion
        onClick={toggleAccordion('second')}
        title={<Accordion.Content>Title (defaulted closed)</Accordion.Content>}
        isOpen={state.second}
      >
        <Accordion.Content>Expansion with content padding</Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

Content.id = `${ACCORDION_SUBCOMPONENTS_STORY_ID_PREFIX}content`;

interface AccordionSubcomponentsStories extends Meta {
  title: string;
}

const ACCORDION_SUBCOMPONENTS_STORIES: AccordionSubcomponentsStories = {
  title: 'Components/Accordion/Subcomponents',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title>Accordion Subcomponents</Title>
          <Description>
            The `Accordion` component has subcomponents available through dot
            notation.
          </Description>
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Accordion } from 'radiance-ui';"}
          />
          <Heading>Stories</Heading>
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
            <Story id={Container.id} />
          </Canvas>
          <Heading>Accordion.Content</Heading>
          <Description>Wraps padding around children nodes</Description>
          <Canvas>
            <Story id={Content.id} />
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
};

export default ACCORDION_SUBCOMPONENTS_STORIES;
