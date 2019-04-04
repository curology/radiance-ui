import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';
import { LoadingSpinnerContainer, Overlay, Dot } from './style';

const LoadingSpinner = ({ bgColor, color, translateX, duration, size }) => (
  <LoadingSpinnerContainer bgColor={bgColor} id="loading-spinner">
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
  translateX: '100px',
  duration: 2,
  size: '14px',
};

export default LoadingSpinner;
