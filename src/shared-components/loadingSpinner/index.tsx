import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { LoadingSpinnerContainer, Overlay, Dot } from './style';
import { ThemeColors } from '../../constants';

interface LoadingSpinnerProps {
  /**
   * Background color of loading container
   */
  bgColor?: ThemeColors;
  /**
   * Color of the loading dots
   */
  color?: ThemeColors;
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
}

/**
 * LoadingSpinner will cover the entirety of the container that holds it. The container should have `position: relative;` as part of its styling to prevent the LoadingSpinner from spilling outside the container.
 */
export const LoadingSpinner = ({
  bgColor,
  color,
  duration = 2,
  size = '14px',
  translateX = '100px',
}: LoadingSpinnerProps) => {
  const theme = useTheme();

  const bgColorWithTheme = bgColor || theme.COLORS.background;
  const colorWithTheme = color || theme.COLORS.primary;

  return (
    <LoadingSpinnerContainer bgColor={bgColorWithTheme}>
      <Overlay>
        <Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
        <Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
        <Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
      </Overlay>
    </LoadingSpinnerContainer>
  );
};

LoadingSpinner.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.string,
  translateX: PropTypes.string,
};
