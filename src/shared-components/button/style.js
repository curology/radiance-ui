import styled, { css } from 'react-emotion';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { ANIMATION, COLORS, SPACING } from '../../constants';

const primaryStyles = css`
  background-color: ${COLORS.purple};
  border-color: ${COLORS.purple};
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

const secondaryStyles = loading => css`
  background-color: transparent;
  border-color: ${COLORS.purple};
  color: ${COLORS.purple};
  fill: ${COLORS.purple};

  &:hover,
  &:focus,
  &:not([href]):not([tabindex]):hover,
  &:not([href]):not([tabindex]):focus {
    background-color: ${loading ? 'inherit' : COLORS.primary};
    color: ${loading ? COLORS.primary : COLORS.white};
    fill: ${loading ? 'inherit' : COLORS.white};
  }
`;

const tertiaryStyles = css`
  border-color: transparent;
  background-color: transparent;
  color: ${COLORS.primary};

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }
`;

const quaternaryStyles = css`
  border-color: transparent;
  background-color: transparent;
  color: ${COLORS.purple60};
  fill: ${COLORS.purple60};

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }
`;

const loadingStyles = css`
  cursor: not-allowed;

  &:hover {
    opacity: 1;
  }
`;

export const disabledStyles = css`
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

function parseTheme(disabled, buttonType, loading) {
  if (disabled) {
    return disabledStyles;
  }

  switch (buttonType) {
    case 'secondary':
      return secondaryStyles(loading);
    case 'tertiary':
      return tertiaryStyles;
    case 'quaternary':
      return quaternaryStyles;
    default:
      return primaryStyles;
  }
}

const baseButtonStyles = ({ disabled, buttonType, loading }) => css`
  ${TYPOGRAPHY_STYLE.button};
  appearance: none;
  border-radius: 0;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: block;
  margin: 0;
  max-width: 325px;
  min-height: 52px;
  min-width: 208px;
  opacity: 1;
  padding: 0 ${SPACING.base};
  position: relative;
  transition: all ${ANIMATION.defaulTiming} ease-in-out;
  text-decoration: none;
  width: max-content;

  &:hover {
    transition: all ${ANIMATION.defaulTiming} ease-in-out;
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${parseTheme(disabled, buttonType, loading)};
  ${loading && loadingStyles};
`;

export const ButtonBase = styled.button(baseButtonStyles);

export const ButtonContents = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${SPACING.small} 0;
  transition: transform ${ANIMATION.defaulTiming};
  width: 100%;

  ${({ loading, hasIcon }) => {
    if (loading && hasIcon) {
      return css`
        transform: translateX(-30px);
      `;
    } else if (loading && !hasIcon) {
      return css`
        transform: translateX(-15px);
      `;
    }
    return css`
      transform: translateX(0);
    `;
  }};

  & > svg {
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin-right: ${SPACING.small};
    margin-top: -5px;
  }
`;

/* eslint-disable indent */
export const ButtonText = styled.span`
  line-height: 1.5;
  margin: 0;
  padding-top: 2px;

  ${({ loading, hasIcon }) => {
    if (loading && !hasIcon) {
      return css`
        padding-left: ${SPACING.small};
      `;
    }
  }};
`;
/* eslint-enable indent */
