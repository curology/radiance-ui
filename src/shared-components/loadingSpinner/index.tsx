import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';
import { LoadingSpinnerContainer, Overlay, Dot } from './style';

type LoadingSpinnerProps = {
  /**
   * Background color of loading container
   */
  bgColor?: string;
  /**
   * Color of the loading dots
   */
  color?: string;
  /**
   * Length of time for animation loop
   */
  duration?: number;
  /**
   * Size of loading dots
   */
  size?: string;
  /**
   * Distance dots will move horizontally
   */
  translateX?: string;
};

/**
 * LoadingSpinner will cover the entirety of the container that holds it. The container should have `position: relative;` as part of its styling to prevent the LoadingSpinner from spilling outside the container.
 */
export const LoadingSpinner = ({
  bgColor = COLORS.background,
  color = COLORS.primary,
  duration = 2,
  size = '14px',
  translateX = '100px',
}: LoadingSpinnerProps) => (
  <LoadingSpinnerContainer bgColor={bgColor}>
    <Overlay>
      <Dot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
      <Dot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
      <Dot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
    </Overlay>
  </LoadingSpinnerContainer>
);

LoadingSpinner.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.string,
  translateX: PropTypes.string,
};
