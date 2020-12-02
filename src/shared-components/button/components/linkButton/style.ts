import { css } from '@emotion/core';

import { ButtonType } from '../..';
import {
  ThemeColorOrEmptyString,
  ThemeColors,
  ThemeType,
} from '../../../../constants';
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
  textColor: ThemeColorOrEmptyString;
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
