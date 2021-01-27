import React from 'react';
import PropTypes from 'prop-types';
import { COLORS_PROP_TYPES, ThemeColors } from 'src/constants';
import { useTheme } from 'emotion-theming';

import { IndicatorContainer } from './style';

type IndicatorProps = {
  text: string | number;
  backgroundColor?: ThemeColors;
};

/**
 * Indicators are used in navigation to help with wayfinding for messages and notifications.
 * It can also be used for non-navigational purposes for information-intensive pages.
 */
export const Indicator = ({ text, backgroundColor }: IndicatorProps) => {
  const theme = useTheme();

  const bgColorWithTheme = backgroundColor || theme.COLORS.error;

  return (
    <IndicatorContainer backgroundColor={bgColorWithTheme}>
      <div>{text}</div>
    </IndicatorContainer>
  );
};

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  backgroundColor: COLORS_PROP_TYPES,
};
