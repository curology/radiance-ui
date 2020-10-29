import { css } from '@emotion/core';
import { ThemeColors, ThemeType } from 'src/constants/themes/types';

import { ButtonType } from '../..';
import { baseButtonStyles } from '../../style';

export const linkButtonStyles = ({disabled,
  buttonType,
  buttonColor,
  textColor,
  theme}: {
  disabled: boolean;
  buttonType: ButtonType;
  buttonColor: ThemeColors;
  textColor: ThemeColors;
  theme: ThemeType;
}) => css`
  ${baseButtonStyles({
    disabled,
    buttonType,
    buttonColor,
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
