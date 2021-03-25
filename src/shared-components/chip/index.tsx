import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { ChipStyles, ChipText } from './style';
import { ThemeColors, ThemeType } from '../../constants';

export type StatusType = 'default' | 'success' | 'error' | 'secondary';

export interface ChipProps {
  isLowContrast?: boolean;
  status?: StatusType;
  text: string;
}

interface GetStylesProps extends Omit<ChipProps, 'text'> {
  theme: ThemeType;
}

const getStyles = ({ isLowContrast, status, theme }: GetStylesProps) => {
  let backgroundColor: ThemeColors = theme.COLORS.white;
  let textColor: ThemeColors = theme.COLORS.primary;

  if (status === 'default') {
    if (isLowContrast === true) {
      backgroundColor = theme.COLORS.defaultLight;
    }
  }

  if (status === 'secondary') {
    backgroundColor = theme.COLORS.white;
    textColor = theme.COLORS.primary;

    if (isLowContrast === true) {
      backgroundColor = theme.COLORS.primary;
      textColor = theme.COLORS.white;
    }
  }

  if (status === 'success') {
    backgroundColor = theme.COLORS.success;
    textColor = theme.COLORS.white;

    if (isLowContrast === true) {
      backgroundColor = theme.COLORS.successBorder;
      textColor = theme.COLORS.success;
    }
  }

  if (status === 'error') {
    backgroundColor = theme.COLORS.error;
    textColor = theme.COLORS.white;

    if (isLowContrast === true) {
      backgroundColor = theme.COLORS.errorLight;
      textColor = theme.COLORS.error;
    }
  }

  return {
    backgroundColor,
    textColor,
  };
};

/**
 * Chips should be used in small spaces to add value to the elements they're nested in. (i.e. "Recommended" on product cards or showing an error on an element in a list.)
 *
 * These chips can be either Default, Success, or Error. The Secondary is an inverse of the primary chip and should be used on top of photos or illustrations.
 */
export const Chip = ({
  isLowContrast = false,
  status = 'default',
  text,
}: ChipProps) => {
  const theme = useTheme();

  const { backgroundColor, textColor } = getStyles({
    isLowContrast,
    status,
    theme,
  });

  return (
    <ChipStyles backgroundColor={backgroundColor} textColor={textColor}>
      <ChipText>{text}</ChipText>
    </ChipStyles>
  );
};

Chip.propTypes = {
  isLowContrast: PropTypes.bool,
  status: PropTypes.oneOf(['default', 'success', 'error', 'secondary']),
  text: PropTypes.string.isRequired,
};
