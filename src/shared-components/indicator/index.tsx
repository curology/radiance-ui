import React from 'react';
import PropTypes from 'prop-types';

import { IndicatorContainer } from './style';

type IndicatorProps = {
  text: string | number;
};

/**
 * Indicators are used in navigation to help with wayfinding for messages and notifications.
 */
export const Indicator = ({ text }: IndicatorProps) => (
  <IndicatorContainer>
    <div>{text}</div>
  </IndicatorContainer>
);

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
