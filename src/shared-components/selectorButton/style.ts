import styled from '@emotion/styled';

import { SPACER, ANIMATION, ThemeType } from '../../constants';

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
      box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};

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
  selector: SelectorType;
  selectorSize: SizeType;
  type: StyleType;
  selectorChecked: boolean;
  disabled: boolean;
}>`
  align-items: center;
  appearance: none;
  border: 1px solid;
  cursor: pointer;
  display: flex;
  ${({ selectorSize }) => `
    width: ${selectorSize === 'large' ? '3rem' : SPACER.xlarge};
    height: ${selectorSize === 'large' ? '3rem' : SPACER.xlarge};
  `}
  justify-content: center;
  transition: background-color ${ANIMATION.defaultTiming};

  ${({ selector }) => `
    border-radius: ${selector === 'checkbox' ? '4px' : '100%'};
  `}

  ${({ type, selectorChecked, disabled, theme }) => {
    if (disabled) {
      return disabledSelectorStyle(theme);
    }
    switch (type) {
      case 'primary':
        return primarySelectorStyle(selectorChecked, theme);
      case 'secondary':
        return secondarySelectorStyle(selectorChecked, theme);
      default:
        return primarySelectorStyle(selectorChecked, theme);
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
