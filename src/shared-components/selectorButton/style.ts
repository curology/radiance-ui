import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
 COLORS, SPACER, ANIMATION, BOX_SHADOWS, 
} from '../../constants';

import { SelectorType, SizeType, StyleType } from '.';

export const SelectorContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const OuterContainer = styled.div<{ selector: SelectorType }>`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  :focus {
    outline: none;
    ${SelectorContainer} {
      box-shadow: ${BOX_SHADOWS.focus};

      ${({ selector }) => css`
        border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
      `};
    }
  }
`;

export const SelectorIcon = styled.div<{ disabled: boolean }>`
  fill: currentColor;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  ${({ disabled }) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `};
`;

const primarySelectorStyle = (checked: boolean) => css`
  background-color: ${checked ? COLORS.primary : 'transparent'};
  border-color: ${COLORS.primary};
`;

const secondarySelectorStyle = (checked: boolean) => css`
  background-color: ${checked ? COLORS.secondary : 'transparent'};
  border-color: ${checked ? COLORS.secondary : COLORS.primary};
`;

const disabledSelectorStyle = css`
  background-color: ${COLORS.purple30};
  border-color: ${COLORS.purple30};
  cursor: not-allowed;
`;

export const Selector = styled.div<{
  size: SizeType;
  selector: SelectorType;
  type: StyleType;
  checked: boolean;
  disabled: boolean;
}>`
  align-items: center;
  appearance: none;
  border: 1px solid;
  cursor: pointer;
  display: flex;
  ${({ size }) => css`
    width: ${size === 'large' ? '3rem' : SPACER.xlarge};
    height: ${size === 'large' ? '3rem' : SPACER.xlarge};
  `} justify-content: center;
  transition: background-color ${ANIMATION.defaultTiming};

  ${({ selector }) => css`
    border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
  `}

  ${({ type, checked, disabled }) => {
    if (disabled) {
      return disabledSelectorStyle;
    }
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
  margin-left: ${SPACER.medium};
  margin-top: ${SPACER.xsmall};
  min-width: 125px;
  text-align: left;
`;
