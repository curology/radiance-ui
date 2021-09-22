import styled from '@emotion/styled';

import { SPACER, ANIMATION, ThemeType } from '../../constants';

import type { SelectorType, SizeType, StyleType } from '.';

const SelectorContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const OuterContainer = styled.div<{ selector: SelectorType }>`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  :focus {
    outline: none;
    ${SelectorContainer} {
      box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};

      ${({ selector, theme }) => `
        border-radius: ${
          selector === 'checkbox' ? theme.BORDER_RADIUS.small : '50%'
        };
      `};
    }
  }
`;

const SelectorIcon = styled.div<{ disabled: boolean }>`
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

const Selector = styled.div<{
  disabled: boolean;
  selector: SelectorType;
  selectorChecked: boolean;
  selectorSize: SizeType;
  type: StyleType;
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

  ${({ selector, theme }) => `
    border-radius: ${
      selector === 'checkbox' ? theme.BORDER_RADIUS.small : '50%'
    };
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

const TextContainer = styled.p`
  margin-left: ${SPACER.medium};
  margin-top: ${SPACER.xsmall};
  min-width: 125px;
  text-align: left;
`;

export default {
  OuterContainer,
  Selector,
  SelectorContainer,
  SelectorIcon,
  TextContainer,
};
