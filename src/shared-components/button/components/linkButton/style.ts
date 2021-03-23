import { css } from '@emotion/core';

import { ButtonType } from '../..';
import { ThemeColors, ThemeType } from '../../../../constants';
import { baseButtonStyles } from '../../style';

interface LinkButtonStylesProps {
  buttonColor: ThemeColors;
  buttonType: ButtonType;
  disabled: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  textColor?: ThemeColors;
  theme: ThemeType;
}

export const linkButtonStyles = ({
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
