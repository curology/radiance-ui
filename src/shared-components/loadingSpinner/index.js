import React from 'react';
import PropTypes from 'prop-types';

import { COLORS } from '../../constants';
import { LoadingContainer, LoadingOverlay, LoadingDot } from './style';

const LoadingSpinner = ({
  bgColor, color, translateX, duration, size, 
}) => (
  <LoadingContainer bgColor={bgColor} id="loading-spinner">
    <LoadingOverlay>
      <LoadingDot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
      <LoadingDot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
      <LoadingDot
        color={color}
        translateX={translateX}
        duration={duration}
        size={size}
      />
    </LoadingOverlay>
  </LoadingContainer>
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
