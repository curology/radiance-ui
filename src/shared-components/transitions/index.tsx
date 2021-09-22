import React from 'react';
import PropTypes from 'prop-types';

import Style from './style';

export interface FadeInContainerProps {
  children: React.ReactNode;
  /**
   * Adds a slide in animation
   */
  slide?: boolean;
  /**
   * Animation transition duration
   */
  speed?: string;
}

export const FadeInContainer: React.FC<FadeInContainerProps> = ({
  children,
  slide = false,
  speed = '350ms',
}) => (
  <Style.FadeInContainer withSlide={slide} animationSpeed={speed}>
    {children}
  </Style.FadeInContainer>
);

FadeInContainer.propTypes = {
  children: PropTypes.node.isRequired,
  slide: PropTypes.bool,
  speed: PropTypes.string,
};

const { opacityInAnimationStyle } = Style;

export { opacityInAnimationStyle };
