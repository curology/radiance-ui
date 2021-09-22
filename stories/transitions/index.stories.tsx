import React from 'react';
import {
  ArgsTable,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { text, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import {
  FadeInContainer,
  opacityInAnimationStyle,
  Container,
} from 'src/shared-components';
import type { Meta } from '@storybook/react';

const InnerContainer = styled.div<{ shouldShow: boolean }>`
  display: ${({ shouldShow }) => (shouldShow ? 'block' : 'none')};
`;

export const FadeInContainerStory = () => (
  <InnerContainer shouldShow={boolean('Toggle to reset the animation', true)}>
    <FadeInContainer
      slide={boolean('slide', true)}
      speed={text('speed', '350ms')}
    >
      <Container type="message">
        <Container.Section>
          FadeInContainer has an opacity fade in animation on the inital render.
          <br />
          <br />
          You can add the slide property for an extra slide in animation.
        </Container.Section>
      </Container>
    </FadeInContainer>
  </InnerContainer>
);

FadeInContainerStory.storyName = 'Fade In Container';

export const OpacityInAnimation = () => (
  <InnerContainer shouldShow={boolean('Toggle to reset the animation', true)}>
    <div css={opacityInAnimationStyle}>
      opacityInAnimationStyle is a snippet for a fade in animation to be used in
      the current emotion style code.
      <br />
      <br />
      It is an <code>@emotion SerializedStyles</code> type.
    </div>
  </InnerContainer>
);

const CHROMATIC_OPTIONS = {
  chromatic: { disable: true },
} as const;

interface TransitionsStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const TRANSITIONS_STORIES: TransitionsStories = {
  title: 'Components/Transitions',
  parameters: {
    ...CHROMATIC_OPTIONS,
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={
              "import { FadeInContainer, opacityInAnimationStyle } from 'radiance-ui';"
            }
          />
          <Heading>FadeInContainer Props:</Heading>
          <ArgsTable of={FadeInContainer} />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default TRANSITIONS_STORIES;
