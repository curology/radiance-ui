import { css } from '@emotion/core';
import { ThemeType } from 'src/constants/themes/types';

import { ButtonType } from '../..';
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
  buttonColor: valueof<ThemeType['COLORS']>;
  textColor: string;
  theme: ThemeType;
}) => css`
  ${baseButtonStyles({
    disabled,
    buttonType,
    buttonColor,
    textColor,
    theme,
  })} span {
    ${disabled && `color: ${theme.COLORS.textDisabled};`};
  }
`;
