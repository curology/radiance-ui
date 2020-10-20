import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
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

export default {
  title: 'Components/Transitions',
  parameters: {
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
          <Primary />
          <Description>
            Note, these props only apply to FadeInContainer
          </Description>
          <ArgsTable of={FadeInContainer} />
          <Stories />
        </React.Fragment>
      ),
    },
  },
} as Meta;
