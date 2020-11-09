import { css } from '@emotion/core';

import { ButtonType } from '../..';
import { ThemeColors, ThemeType } from '../../../../constants';
import { baseButtonStyles } from '../../style';

export const linkButtonStyles = ({
  disabled,
  buttonType,
  buttonColor,
  textColor,
  theme,
}: {
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
