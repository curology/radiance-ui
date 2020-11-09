import styled from '@emotion/styled';

import { SPACER, ANIMATION, BOX_SHADOWS, ThemeType } from '../../constants';

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

      ${({ selector }) => `
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
  ${({ disabled }) => `
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `};
`;

const primarySelectorStyle = (checked: boolean, theme: ThemeType) => `
  background-color: ${checked ? theme.COLORS.primary : 'transparent'};
  border-color: ${theme.COLORS.primary};
`;

const secondarySelectorStyle = (checked: boolean, theme: ThemeType) => `
  background-color: ${checked ? theme.COLORS.secondary : 'transparent'};
  border-color: ${checked ? theme.COLORS.secondary : theme.COLORS.primary};
`;

const disabledSelectorStyle = (theme: ThemeType) => `
  background-color: ${theme.COLORS.primaryTint3};
  border-color: ${theme.COLORS.primaryTint3};
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
  ${({ size }) => `
    width: ${size === 'large' ? '3rem' : SPACER.xlarge};
    height: ${size === 'large' ? '3rem' : SPACER.xlarge};
  `}
  justify-content: center;
  transition: background-color ${ANIMATION.defaultTiming};

  ${({ selector }) => `
    border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
  `}

  ${({ type, checked, disabled, theme }) => {
    if (disabled) {
      return disabledSelectorStyle(theme);
    }
    switch (type) {
      case 'primary':
        return primarySelectorStyle(checked, theme);
      case 'secondary':
        return secondarySelectorStyle(checked, theme);
      default:
        return primarySelectorStyle(checked, theme);
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
