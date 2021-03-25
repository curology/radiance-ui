import React from 'react';
import PropTypes from 'prop-types';
import type { ThemeColors, ThemeType } from 'src/constants';
import { useTheme } from 'emotion-theming';

import { IndicatorContainer } from './style';

export interface IndicatorProps {
  text: string | number;
  type?: 'error' | 'success' | 'tertiary' | 'white';
}

interface GetStylesProps extends Required<Pick<IndicatorProps, 'type'>> {
  theme: ThemeType;
}

const getStyles = ({ theme, type }: GetStylesProps) => {
  // Default properties correspond to 'error' type
  let backgroundColor: ThemeColors = theme.COLORS.error;
  let textColor: ThemeColors = theme.COLORS.white;

  if (type === 'success') {
    backgroundColor = theme.COLORS.success;
  }

  if (type === 'tertiary') {
    backgroundColor = theme.COLORS.defaultLight;
    textColor = theme.COLORS.primary;
  }

  if (type === 'white') {
    backgroundColor = theme.COLORS.white;
    textColor = theme.COLORS.primary;
  }

  return {
    backgroundColor,
    textColor,
  };
};

/**
 * Indicators are used in navigation to help with wayfinding for messages and notifications.
 * It can also be used for non-navigational purposes for information-intensive pages.
 */
export const Indicator = ({ text, type = 'error' }: IndicatorProps) => {
  const theme = useTheme();
  const { backgroundColor, textColor } = getStyles({ theme, type });

  return (
    <IndicatorContainer backgroundColor={backgroundColor} textColor={textColor}>
      <div>{text}</div>
    </IndicatorContainer>
  );
};

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['error', 'success', 'tertiary', 'white']),
};
