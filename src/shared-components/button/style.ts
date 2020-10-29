import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { ThemeColors, ThemeType } from 'src/constants/themes/types';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { ANIMATION, SPACER, BOX_SHADOWS } from '../../constants';
import { textColorsAssociatedWithColors } from './constants';

import { ButtonTypeWithAction } from '.';

const primaryStyles = (buttonColor: ThemeColors, theme: ThemeType) => `
  background-color: ${buttonColor};
  border-color: ${buttonColor};
  color: ${theme.COLORS.white};
  fill: ${theme.COLORS.white};
  &:visited,
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    color: ${theme.COLORS.white};
  }
`;

const secondaryStyles = (
  isLoading: boolean,
  buttonColor: ThemeColors,
  theme: ThemeType,
) => `
  background-color: transparent;
  border-color: ${buttonColor};
  color: ${buttonColor};
  fill: ${buttonColor};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    background-color: ${isLoading ? 'inherit' : buttonColor};
    color: ${isLoading ? buttonColor : theme.COLORS.white};
    fill: ${isLoading ? 'inherit' : theme.COLORS.white};
  }
`;

const tertiaryStyles = (buttonColor: ThemeColors) => `
  border-color: transparent;
  background-color: transparent;
  color: ${buttonColor};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    opacity: 0.8;
    background-color: transparent;
    color: ${buttonColor};
  }
`;

const quaternaryStyles = (buttonColor: ThemeColors, theme: ThemeType) => `
  border-color: transparent;
  background-color: transparent;
  color: ${
    textColorsAssociatedWithColors(theme)[buttonColor]
      ? textColorsAssociatedWithColors(theme)[buttonColor].tint2
      : tinycolor(buttonColor).lighten(10).desaturate(50).toHexString()
  };
  fill: ${
    textColorsAssociatedWithColors(theme)[buttonColor]
      ? textColorsAssociatedWithColors(theme)[buttonColor].tint2
      : tinycolor(buttonColor).lighten(10).desaturate(50).toHexString()
  };

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    opacity: 0.8;
    background-color: transparent;
    color: ${
      textColorsAssociatedWithColors(theme)[buttonColor]
        ? textColorsAssociatedWithColors(theme)[buttonColor].tint2
        : tinycolor(buttonColor).lighten(10).desaturate(50).toHexString()
    };
  }
`;

const actionStyles = (
  isLoading: boolean,
  buttonColor: ThemeColors,
  theme: ThemeType,
) => `
  border-width: 1px;
  border-color: ${theme.COLORS.border};
  background-color: ${theme.COLORS.white};
  color: ${buttonColor};
  fill: ${buttonColor};
  box-shadow: ${isLoading ? 'none' : BOX_SHADOWS.clickable};

  &:hover {
    box-shadow: ${isLoading ? 'none' : BOX_SHADOWS.clickableHover};
  }
`;

const loadingStyles = `
  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
`;

const disabledStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.disabled};
  border-color: ${theme.COLORS.disabled};
  color: ${theme.COLORS.textDisabled};
  cursor: not-allowed;
  fill: ${theme.COLORS.textDisabled};

  &:visited,
  &:hover {
    opacity: 1;
    color: ${theme.COLORS.textDisabled};
  }
`;

function parseTheme(
  disabled: boolean,
  buttonType: ButtonTypeWithAction,
  isLoading: boolean,
  buttonColor: ThemeColors,
  theme: ThemeType,
) {
  if (disabled) {
    return disabledStyles(theme);
  }

  switch (buttonType) {
    case 'secondary':
      return secondaryStyles(isLoading, buttonColor, theme);
    case 'tertiary':
      return tertiaryStyles(buttonColor);
    case 'quaternary':
      return quaternaryStyles(buttonColor, theme);
    case 'action':
      return actionStyles(isLoading, buttonColor, theme);
    default:
      return primaryStyles(buttonColor, theme);
  }
}

type BaseButtonStylesTypes = {
  disabled: boolean;
  buttonType: ButtonTypeWithAction;
  buttonColor: ThemeColors;
  isLoading?: boolean;
  textColor: ThemeColors;
  isFullWidth?: boolean;
  theme: ThemeType;
};

export const baseButtonStyles = ({disabled,
  buttonType,
  buttonColor,
  isLoading,
  textColor,
  isFullWidth,
  theme}: BaseButtonStylesTypes) => `
  ${TYPOGRAPHY_STYLE.button(theme)}
  appearance: none;
  border-radius: ${SPACER.xsmall};
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: block;
  margin: 0;
  min-height: 52px;
  opacity: 1;
  padding: 0 ${SPACER.large};
  position: relative;
  transition: all ${ANIMATION.defaultTiming} ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all ${ANIMATION.defaultTiming} ease-in-out;
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }

  ${parseTheme(disabled, buttonType, !!isLoading, buttonColor, theme)}
  ${isLoading ? loadingStyles : ''}

  ${
    !!textColor && !disabled
      ? `
    color: ${textColor};
    fill: ${textColor};
  `
      : ''
  }

  ${
    isFullWidth
      ? `
      width: 100%;
    `
      : `
    min-width: 208px;
    max-width: 325px;
    width: max-content;
    `
  }
`;

export const ButtonBase = styled.button<Omit<BaseButtonStylesTypes, 'theme'>>`
  ${baseButtonStyles}
`;

// align-items conditional fixes slight button height misalignment for truthy scenario
// See screenshot in: https://github.com/PocketDerm/radiance-ui/pull/129#issue-292994081
export const ButtonContents = styled.div<{
  hasIcon?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
}>`
  align-items: ${({ hasIcon, isFullWidth, isLoading }) => {
    if (isFullWidth && isLoading && hasIcon) {
      return 'baseline';
    }

    return 'center';
  }};

  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${SPACER.medium} 0;
  transition: transform ${ANIMATION.defaultTiming};
  width: 100%;

  ${({ isLoading, hasIcon }) => {
    if (isLoading && hasIcon) {
      return `
        transform: translateX(-30px);
      `;
    }

    if (isLoading && !hasIcon) {
      return `
        transform: translateX(-15px);
      `;
    }

    return `
      transform: translateX(0);
    `;
  }}

  & > svg {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin-right: ${SPACER.medium};
    margin-top: -5px;
  }
`;

export const ButtonText = styled.span<{
  hasIcon?: boolean;
  isLoading?: boolean;
}>`
  line-height: 1.5;
  margin: 0;
  padding-top: 2px;

  ${({ isLoading, hasIcon }) => {
    if (isLoading && !hasIcon) {
      return `
        padding-left: ${SPACER.medium};
      `;
    }
    return '';
  }};
`;
