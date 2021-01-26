import React from 'react';
import PropTypes from 'prop-types';
import { COLORS_PROP_TYPES, ThemeColors } from 'src/constants';

import { IndicatorContainer } from './style';

type IndicatorProps = {
  text: string | number;
  backgroundColor?: ThemeColors;
};

/**
 * Indicators are used in navigation to help with wayfinding for messages and notifications.
 */
export const Indicator = ({ text, backgroundColor }: IndicatorProps) => (
  <IndicatorContainer backgroundColor={backgroundColor}>
    <div>{text}</div>
  </IndicatorContainer>
);

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  backgroundColor: COLORS_PROP_TYPES,
};
