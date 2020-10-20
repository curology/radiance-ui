import React from 'react';
import PropTypes from 'prop-types';

import { FadeInContainer as StyledContainer } from './style';

export { opacityInAnimationStyle } from './style';

type FadeInContainerProps = {
  children: React.ReactNode;
  /**
   * Adds a slide in animation
   */
  slide?: boolean;
  /**
   * Animation transition duration
   */
  speed?: string;
};

export const FadeInContainer = ({
  children,
  slide = false,
  speed = '350ms',
}: FadeInContainerProps) => (
  <StyledContainer withSlide={slide} animationSpeed={speed}>
    {children}
  </StyledContainer>
);

FadeInContainer.propTypes = {
  children: PropTypes.node.isRequired,
  slide: PropTypes.bool,
  speed: PropTypes.string,
};
