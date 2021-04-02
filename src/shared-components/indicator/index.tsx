import React from 'react';
import PropTypes from 'prop-types';
import type { ThemeColors, ThemeType } from 'src/constants';
import { useTheme } from 'emotion-theming';

import Style from './style';

export interface IndicatorProps {
  text: string | number;
  /**
   * Built-in intent styling presets. Type names correspond to Figma design file naming.
   */
  type?: 'error' | 'success' | 'tertiary' | 'white' | 'primary';
}

interface GetStylesProps extends Required<Pick<IndicatorProps, 'type'>> {
  theme: ThemeType;
}

const getStyles = ({ theme, type }: GetStylesProps) => {
  // Default properties correspond to 'error' type
  let backgroundColor: ThemeColors = theme.COLORS.error;
  let textColor: ThemeColors = theme.COLORS.white;

  if (type === 'primary') {
    backgroundColor = theme.COLORS.primary;
  }

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
    <Style.IndicatorContainer
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div>{text}</div>
    </Style.IndicatorContainer>
  );
};

Indicator.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['error', 'primary', 'success', 'tertiary', 'white']),
};
