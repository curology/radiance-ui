import { css } from '@emotion/core';

import { ButtonType } from '../..';
import { ThemeColors, ThemeType } from '../../../../constants';
import { baseButtonStyles } from '../../style';

export const linkButtonStyles = ({
  buttonColor,
  buttonType,
  disabled,
  textColor,
  theme,
}: {
  buttonColor: ThemeColors;
  buttonType: ButtonType;
  disabled: boolean;
  textColor?: ThemeColors;
  theme: ThemeType;
}) => css`
  ${baseButtonStyles({
    buttonColor,
    buttonType,
    disabled,
    isFullWidth: false,
    isLoading: false,
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
