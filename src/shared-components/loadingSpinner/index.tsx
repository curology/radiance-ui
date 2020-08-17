import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';
import { LoadingSpinnerContainer, Overlay, Dot } from './style';

type LoadingSpinnerProps = {
  bgColor?: string;
  color?: string;
  translateX?: string;
  duration?: number;
  size?: string;
};

const DEFAULT_TRANSLATE_X = '100px';
const DEFAULT_DURATION = 2;
const DEFAULT_SIZE = '14px';

const LoadingSpinner = ({
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

export default LoadingSpinner;
