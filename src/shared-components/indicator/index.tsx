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
 *
 * By adding an optional `backgroundColor` prop, the component can be reused for other purposes
 * such as indicating the number of dormant formulas a patient has on a prescription plan in the
 * Provider timeline.
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
