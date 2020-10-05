import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import FadeInContainerReadme from 'docs/transitions/fadeInContainer';
import OpacityInReadme from 'docs/transitions/opacityInAnimationStyle';
import {
  FadeInContainer,
  opacityInAnimationStyle,
  Container,
} from 'src/shared-components';

const MainContainer = styled.div`
  text-align: left;
  min-height: 150px;
`;

const InnerContainer = styled.div`
  display: ${({ render }) => (render ? 'block' : 'none')};
`;

const CustomFadeInContainer = styled.div`
  ${opacityInAnimationStyle};
`;

const stories = storiesOf('Transitions', module);

stories.add(
  'FadeInContainer',
  withDocs(FadeInContainerReadme, () => (
    <MainContainer>
      <InnerContainer render={boolean('Toggle to reset the animation', true)}>
        <FadeInContainer
          slide={boolean('slide', true)}
          speed={text('speed', '350ms')}
        >
          <Container type="message">
            <Container.Section>
              FadeInContainer has an opacity fade in animation on the inital
              render. <br />
              You can add the slide property for an extra slide in animation.
            </Container.Section>
          </Container>
        </FadeInContainer>
      </InnerContainer>
    </MainContainer>
  )),
);

stories.add(
  'opacityInAnimationStyle',
  withDocs(OpacityInReadme, () => (
    <MainContainer>
      <InnerContainer render={boolean('Toggle to reset the animation', true)}>
        <CustomFadeInContainer>
          opacityInAnimationStyle is a snippet for a fade in animation to be
          used in the current emotion style code.
        </CustomFadeInContainer>
      </InnerContainer>
    </MainContainer>
  )),
);
