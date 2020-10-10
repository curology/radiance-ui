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
   * Distance dots will move horizontally
   */
  translateX?: string;
  /**
   * Length of time for animation loop
   */
  duration?: number;
  /**
   * Size of loading dots
   */
  size?: string;
};

const DEFAULT_TRANSLATE_X = '100px';
const DEFAULT_DURATION = 2;
const DEFAULT_SIZE = '14px';

/**
 * LoadingSpinner will cover the entirety of the container that holds it. The container should have `position: relative;` as part of its styling to prevent the LoadingSpinner from spilling outside the container.
 */
export const LoadingSpinner = ({
  bgColor = COLORS.background,
  color = COLORS.primary,
  translateX = DEFAULT_TRANSLATE_X,
  duration = DEFAULT_DURATION,
  size = DEFAULT_SIZE,
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
  translateX: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  bgColor: COLORS.background,
  color: COLORS.primary,
  translateX: DEFAULT_TRANSLATE_X,
  duration: DEFAULT_DURATION,
  size: DEFAULT_SIZE,
};
