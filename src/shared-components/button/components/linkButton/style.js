import { css } from '@emotion/core';

import { baseButtonStyles } from '../../style';
import { COLORS } from '../../../../constants';

/* eslint-disable-next-line import/prefer-default-export */
export const linkButtonStyles = ({
  disabled,
  buttonType,
  buttonColor,
  textColor,
}) => css`
  ${baseButtonStyles({ disabled, buttonType, buttonColor, textColor })} span {
    ${disabled && `color: ${COLORS.textDisabled};`};
  }
`;
