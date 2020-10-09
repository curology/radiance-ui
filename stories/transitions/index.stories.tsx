import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import {
  Title,
  Primary,
  ArgsTable,
  Stories,
  Description,
  Heading,
  Source,
} from '@storybook/addon-docs/blocks';
import {
  FadeInContainer as FadeInContainerComponent,
  opacityInAnimationStyle,
  Container,
} from 'src/shared-components';

const InnerContainer = styled.div<{ shouldShow: boolean }>`
  display: ${({ shouldShow }) => (shouldShow ? 'block' : 'none')};
`;

export const FadeInContainer = () => (
  <InnerContainer shouldShow={boolean('Toggle to reset the animation', true)}>
    <FadeInContainerComponent
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
    </FadeInContainerComponent>
  </InnerContainer>
);

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
          <ArgsTable of={FadeInContainerComponent} />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
