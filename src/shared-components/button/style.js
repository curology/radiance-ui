import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { ANIMATION, COLORS, SPACER, BOX_SHADOWS } from '../../constants';
import { lighten } from '../../utils';

const primaryStyles = color => css`
  background-color: ${COLORS[color]};
  border-color: ${COLORS[color]};
  color: ${COLORS.white};
  fill: ${COLORS.white};
  &:visited,
  &:hover {
    opacity: 0.8;
  }
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    color: ${COLORS.white};
  }
`;

const secondaryStyles = (isLoading, color) => css`
  background-color: transparent;
  border-color: ${COLORS[color]};
  color: ${COLORS[color]};
  fill: ${COLORS[color]};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    background-color: ${isLoading ? 'inherit' : COLORS[color]};
    color: ${isLoading ? COLORS[color] : COLORS.white};
    fill: ${isLoading ? 'inherit' : COLORS.white};
  }
`;

const tertiaryStyles = color => css`
  border-color: transparent;
  background-color: transparent;
  color: ${COLORS[color]};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    opacity: 0.8;
    background-color: transparent;
    color: ${COLORS[color]};
  }
`;

const quaternaryStyles = color => css`
  border-color: transparent;
  background-color: transparent;
  color: ${lighten(COLORS[color], '30%')};
  fill: ${lighten(COLORS[color], '30%')};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    opacity: 0.8;
    background-color: transparent;
    color: ${lighten(COLORS[color], '30%')};
  }
`;

const actionStyles = (isLoading, color) => css`
  border-width: 1px;
  border-color: ${COLORS.border};
  background-color: ${COLORS.white};
  color: ${COLORS[color]};
  fill: ${COLORS[color]};
  box-shadow: ${isLoading ? 'none' : BOX_SHADOWS.clickable};

  &:hover {
    box-shadow: ${isLoading ? 'none' : BOX_SHADOWS.clickableHover};
  }
`;

const loadingStyles = css`
  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
`;

const disabledStyles = css`
  background-color: ${COLORS.disabled};
  border-color: ${COLORS.disabled};
  color: ${COLORS.textDisabled};
  cursor: not-allowed;
  fill: ${COLORS.textDisabled};

  &:visited,
  &:hover {
    opacity: 1;
    color: ${COLORS.textDisabled};
  }
`;

function parseTheme(disabled, buttonType, isLoading, color) {
  if (disabled) {
    return disabledStyles;
  }

  switch (buttonType) {
    case 'secondary':
      return secondaryStyles(isLoading, color);
    case 'tertiary':
      return tertiaryStyles(color);
    case 'quaternary':
      return quaternaryStyles(color);
    case 'action':
      return actionStyles(isLoading, color);
    default:
      return primaryStyles(color);
  }
}

export const baseButtonStyles = ({
  disabled,
  buttonType,
  color,
  isLoading,
  textColor,
  isFullWidth,
}) => css`
  ${TYPOGRAPHY_STYLE.button};
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
  }

  ${parseTheme(disabled, buttonType, isLoading, color)};
  ${isLoading && loadingStyles};

  ${!!textColor &&
    !disabled &&
    `
    color: ${textColor};
    fill: ${textColor};
  `};

  ${isFullWidth
    ? `
      width: 100%;
    `
    : `
    min-width: 208px;
    max-width: 325px;
    width: max-content;

    `};
`;

export const ButtonBase = styled.button(baseButtonStyles);

// align-items conditional fixes slight button height misalignment for truthy scenario
// See screenshot in: https://github.com/PocketDerm/radiance-ui/pull/129#issue-292994081
export const ButtonContents = styled.div`
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
      return css`
        transform: translateX(-30px);
      `;
    }

    if (isLoading && !hasIcon) {
      return css`
        transform: translateX(-15px);
      `;
    }

    return css`
      transform: translateX(0);
    `;
  }};

  & > svg {
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin-right: ${SPACER.medium};
    margin-top: -5px;
  }
`;

export const ButtonText = styled.span`
  line-height: 1.5;
  margin: 0;
  padding-top: 2px;

  ${({ isLoading, hasIcon }) => {
    if (isLoading && !hasIcon) {
      return css`
        padding-left: ${SPACER.medium};
      `;
    }
  }};
`;
