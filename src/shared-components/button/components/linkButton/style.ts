import { css } from '@emotion/core';

import { baseButtonStyles } from '../../style';
import type { ButtonType } from '../../types';
import type { ThemeColors, ThemeType } from '../../../../constants';

interface LinkButtonStylesProps {
  buttonColor: ThemeColors;
  buttonType: ButtonType;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  textColor?: ThemeColors;
  theme: ThemeType;
}

const linkButtonStyles = ({
  buttonColor,
  buttonType,
  disabled,
  isFullWidth = false,
  isLoading = false,
  textColor,
  theme,
}: LinkButtonStylesProps) => css`
  ${baseButtonStyles({
    buttonColor,
    buttonType,
    disabled,
    isFullWidth,
    isLoading,
    textColor,
    theme,
  })}

  ${disabled
    ? `
  span {
    color: ${theme.COLORS.textDisabled};
  }
  `
    : ''}
`;

export default {
  linkButtonStyles,
};
