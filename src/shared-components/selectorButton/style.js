import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  COLORS,
  SPACING,
  ANIMATION,
  BOX_SHADOWS,
} from '../../constants';

export const SelectorContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const OuterContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  :focus {
    outline: none;
    ${SelectorContainer} {
      box-shadow: ${BOX_SHADOWS.focusSecondary};

      ${({ selector }) => css`
        border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
      `}
    }
  }
`;

export const selectorIcon = css`
  cursor: pointer;
  fill: currentColor;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const primarySelectorStyle = checked => css`
  background-color: ${checked ? COLORS.primary : 'transparent'};
  border-color: ${COLORS.primary};
`;

const secondarySelectorStyle = checked => css`
  background-color: ${checked ? COLORS.secondary : 'transparent'};
  border-color: ${checked ? COLORS.secondary : COLORS.primary};
`;

export const Selector = styled.div`
  align-items: center;
  appearance: none;
  border: 2px solid;
  cursor: pointer;
  display: flex;
  height: ${SPACING.medium};
  justify-content: center;
  transition: background-color ${ANIMATION.defaultTiming};
  width: ${SPACING.medium};

  ${({ selector }) => css`
    border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
  `}

  ${({ type, checked }) => {
    switch (type) {
      case 'primary':
        return primarySelectorStyle(checked);
      case 'secondary':
        return secondarySelectorStyle(checked);
      default:
        return primarySelectorStyle(checked);
    }
  }}

  &:active,
  &:focus {
    outline: none;
  }
`;

export const TextContainer = styled.p`
  margin-left: ${SPACING.small};
  margin-top: ${SPACING.xxsmall};
  min-width: 125px;
  text-align: left;
`;
