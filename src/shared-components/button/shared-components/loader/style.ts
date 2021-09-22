import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { keyframes } from '@emotion/react';

import { primaryButtonLoadingBackgroundColor } from '../../../../utils/themeStyles';
import { isDefined } from '../../../../utils/isDefined';
import type { ButtonTypeWithAction } from '../../types';
import type { ThemeColors, ThemeType } from '../../../../constants';

const statefulLoader = keyframes`
  0% { opacity: 1; transform: translate3d(0, 0, 0) scale(1, 1); }
  20% { opacity: .95; transform: translate3d(12px, 0, 0) scale(1, 1); }
  35% { opacity: 0; transform: translate3d(16px, 0, 0) scale(.85, .85); }
  100% { opacity: 0; transform: translate3d(16px, 0, 0); }
`;

const primaryLoadingStyles = (theme: ThemeType) => `
  background-color: ${primaryButtonLoadingBackgroundColor(theme)};
`;

const accentLoadingStyles = (buttonColor: ThemeColors) => `
  background-color: ${buttonColor};
`;

const quaternaryLoadingStyles = (buttonColor: ThemeColors) => `
  background-color: ${tinycolor(buttonColor)
    .lighten(10)
    .desaturate(50)
    .toHexString()};
`;

// eslint-disable-next-line sonarjs/no-identical-functions
const actionLoadingStyles = (buttonColor: ThemeColors) => `
  background-color: ${buttonColor};
`;

const ButtonLoader = styled.div<{
  buttonColor: ThemeColors;
  buttonType: ButtonTypeWithAction;
  disabled: boolean;
  isFullWidth: boolean;
  isLoading: boolean;
  textColor?: ThemeColors;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  margin-top: -6px;
  width: ${({ isFullWidth }) => (isFullWidth ? `25%` : `38px`)};
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};

  & span {
    ${({ disabled, buttonType, buttonColor, theme }) => {
      if (disabled) {
        return '';
      }

      switch (buttonType) {
        case 'secondary':
          return accentLoadingStyles(buttonColor);
        case 'tertiary':
          return accentLoadingStyles(buttonColor);
        case 'quaternary':
          return quaternaryLoadingStyles(buttonColor);
        case 'action':
          return actionLoadingStyles(buttonColor);
        default:
          return primaryLoadingStyles(theme);
      }
    }};

    ${({ textColor, disabled }) =>
      isDefined(textColor) &&
      !disabled &&
      `
      background-color: ${textColor};
    `};

    border-radius: 50%;
    display: inline-block;
    height: 4px;
    width: 4px;
    position: absolute;

    &:nth-of-type(1) {
      animation: ${statefulLoader} 1750ms infinite linear;
    }

    &:nth-of-type(2) {
      animation: ${statefulLoader} 1750ms infinite linear -300ms;
    }

    &:nth-of-type(3) {
      animation: ${statefulLoader} 1750ms infinite linear -600ms;
    }
  }
`;

export default ButtonLoader;
