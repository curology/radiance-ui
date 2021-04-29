import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import Style from './style';
import type { ThemeColors, ThemeType } from '../../constants';

export type StatusType = 'primary' | 'success' | 'error' | 'white';

export interface ChipProps {
  isLowContrast?: boolean;
  status?: StatusType;
  text: string;
}

interface GetStylesProps extends Required<Omit<ChipProps, 'text'>> {
  theme: ThemeType;
}

const getStyles = ({ isLowContrast, status, theme }: GetStylesProps) => {
  // Default colors are primary
  let backgroundColor: ThemeColors = theme.COLORS.primary;
  let textColor: ThemeColors = theme.COLORS.white;

  if (status === 'primary' && isLowContrast) {
    backgroundColor = theme.COLORS.defaultLight;
    textColor = theme.COLORS.primary;
  }

  if (status === 'error') {
    backgroundColor = theme.COLORS.error;
    textColor = theme.COLORS.white;

    if (isLowContrast) {
      backgroundColor = theme.COLORS.errorLight;
      textColor = theme.COLORS.error;
    }
  }

  if (status === 'success') {
    backgroundColor = theme.COLORS.success;
    textColor = theme.COLORS.white;

    if (isLowContrast) {
      backgroundColor = theme.COLORS.successBorder;
      textColor = theme.COLORS.success;
    }
  }

  if (status === 'white') {
    /**
     * No low-contrast version of white variation
     */
    backgroundColor = theme.COLORS.white;
    textColor = theme.COLORS.primary;
  }

  return {
    backgroundColor,
    textColor,
  };
};

/**
 * Chips should be used in small spaces to add value to the elements they're nested in. (i.e. "Recommended" on product cards or showing an error on an element in a list.)
 *
 * These chips can have a status value of Error, Primary, Success, or White. "White" does not have a low contrast version, and can be used on top of photos or illustrations.
 */
export const Chip = ({
  isLowContrast = false,
  status = 'primary',
  text,
}: ChipProps) => {
  const theme = useTheme();

  const { backgroundColor, textColor } = getStyles({
    isLowContrast,
    status,
    theme,
  });

  return (
    <Style.ChipStyles backgroundColor={backgroundColor} textColor={textColor}>
      <Style.ChipText>{text}</Style.ChipText>
    </Style.ChipStyles>
  );
};

Chip.propTypes = {
  isLowContrast: PropTypes.bool,
  status: PropTypes.oneOf(['primary', 'success', 'error', 'white']),
  text: PropTypes.string.isRequired,
};
