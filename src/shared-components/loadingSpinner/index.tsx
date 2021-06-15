import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import Style from './style';
import { COLORS_PROP_TYPES, ThemeColors } from '../../constants';

export interface LoadingSpinnerProps {
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
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  bgColor,
  color,
  duration = 2,
  size = '14px',
  translateX = '100px',
}) => {
  const theme = useTheme();

  const bgColorWithTheme = bgColor ?? theme.COLORS.background;
  const colorWithTheme = color ?? theme.COLORS.primary;

  return (
    <Style.LoadingSpinnerContainer bgColor={bgColorWithTheme}>
      <Style.Overlay>
        <Style.Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
        <Style.Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
        <Style.Dot
          dotColor={colorWithTheme}
          translateX={translateX}
          duration={duration}
          dotSize={size}
        />
      </Style.Overlay>
    </Style.LoadingSpinnerContainer>
  );
};

LoadingSpinner.propTypes = {
  bgColor: COLORS_PROP_TYPES,
  color: COLORS_PROP_TYPES,
  duration: PropTypes.number,
  size: PropTypes.string,
  translateX: PropTypes.string,
};
