import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ANIMATION, SPACER, ThemeType } from '../../constants';

export interface DropdownInputStyleProps {
  borderRadius: string;
  shouldBeFullyRounded: boolean;
  textAlign: 'left' | 'center';
  theme: ThemeType;
}

const DropdownContainer = styled.div<{ textAlign: 'left' | 'center' }>`
  position: relative;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};

  > div:first-of-type {
    &:focus {
      outline: none;
    }
  }
`;

const dropdownInputStyle = ({
  borderRadius,
  shouldBeFullyRounded,
  textAlign,
  theme,
}: DropdownInputStyleProps) => {
  /**
   * When Desktop dropdown is open, we want only the top borders rounded.
   * Otherwise we set bottom rounded borders to last element in Dropdown.
   */
  const dropdownBorderRadius = shouldBeFullyRounded
    ? `border-radius: ${borderRadius}`
    : `border-radius: ${borderRadius} ${borderRadius} 0 0`;

  return css`
    appearance: none;
    box-shadow: ${theme.BOX_SHADOWS.clickable};
    background: ${theme.COLORS.white};
    background-image: none;

    width: 100%;
    min-height: ${SPACER.x4large};
    max-height: ${SPACER.x4large};

    border: 1px solid ${theme.COLORS.border};
    ${dropdownBorderRadius};

    color: ${theme.COLORS.primaryTint1};
    line-height: ${SPACER.x4large};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 0 ${SPACER.xlarge} 0 ${SPACER.medium};
    text-align: ${textAlign};
    text-align-last: ${textAlign};
    transition: 200ms ease-in-out;

    cursor: pointer;

    &:hover {
      box-shadow: ${theme.BOX_SHADOWS.clickableHover};
      transition: 200ms ease-in-out;
    }

    &:focus {
      outline: none;
      box-shadow: ${theme.BOX_SHADOWS.clickableHover};
      transition: 200ms ease-in-out;
    }

    &::-moz-focus-inner {
      border: 0;
    }
  `;
};

const DropdownFocusContainer = styled.div`
  &:focus {
    > div:first-of-type {
      box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focusInner};
      outline: none;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  width: ${SPACER.large};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  &:hover {
    cursor: pointer;
  }

  & svg {
    transition: transform ${ANIMATION.defaultTiming} ease-in-out;
  }
`;

const DropdownOptionsContainer = styled.ul<{
  borderRadius: string;
  isOpen: boolean;
  optionsContainerMaxHeight: string;
}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 5;

  margin: 0;
  border-radius: 0;
  border: 0;
  border-color: ${({ theme }) => theme.COLORS.border};
  border-style: solid;
  border-width: 0 1px;
  background: ${({ theme }) => theme.COLORS.white};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.clickable};

  overflow-y: auto;
  max-height: 0;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;

  list-style: none;
  -webkit-overflow-scrolling: touch;

  ${({ isOpen, optionsContainerMaxHeight }) =>
    isOpen &&
    `
      max-height: ${optionsContainerMaxHeight};
      border-bottom-width: 1px;
      transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
    `}

  &:last-of-type {
    border-radius: ${({ borderRadius }) =>
      `0 0 ${borderRadius} ${borderRadius}`};
  }
`;

const DropdownOption = styled.li<{
  disabled: boolean;
  selected: boolean;
}>`
  color: ${({ theme }) => theme.COLORS.primaryTint1};
  min-height: ${SPACER.x4large};

  background-color: ${({ theme }) => theme.COLORS.white};
  cursor: pointer;
  padding: 18px ${SPACER.medium} 14px ${SPACER.medium};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.infoLight};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.infoLight};
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focusInner};
  }

  ${({ selected, theme }) =>
    selected &&
    `
      font-weight: ${theme.TYPOGRAPHY.fontWeight.bold};
    `}

  ${({ disabled, theme }) =>
    disabled &&
    `
      background-color: ${theme.COLORS.white};
      color: ${theme.COLORS.textDisabled};
      font-weight: normal;
      cursor: not-allowed;

      &:hover {
        background-color: ${theme.COLORS.white};
        font-weight: normal;
      }
      &:focus {
        background-color: ${theme.COLORS.white};
        font-weight: normal;
      }
    `}
`;

export default {
  DropdownContainer,
  DropdownFocusContainer,
  dropdownInputStyle,
  DropdownOption,
  DropdownOptionsContainer,
  IconContainer,
};
