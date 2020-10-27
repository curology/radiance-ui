import styled from 'src/utils/theming/styled';
import { css, keyframes } from '@emotion/core';

import { ANIMATION } from '../../constants';

const slideInAnimation = keyframes`
  0% {
    transform: translateY(-10%);
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const opacityInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const getAnimationStyle = (slide: boolean, speed: string) => {
  if (slide) {
    return css`
      animation: ${slideInAnimation} ${speed} ease-in-out;
    `;
  }

  return css`
    animation: ${opacityInAnimation} ${speed} ease-in-out;
  `;
};

export const FadeInContainer = styled.div<{
  withSlide: boolean;
  animationSpeed: string;
}>`
  ${({ withSlide, animationSpeed }) =>
    getAnimationStyle(withSlide, animationSpeed)};
`;

export const opacityInAnimationStyle = css`
  animation: ${opacityInAnimation} ${ANIMATION.defaultTiming} ease-in-out;
`;
