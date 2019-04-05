import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  COLORS,
  BOX_SHADOWS,
  SPACING,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

const optionsContainerMaxHeight = '250px';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;

export const dropdownInputStyle = ({ textAlign }) => css`
  appearance: none;
  box-shadow: ${BOX_SHADOWS.clickable};
  background: ${COLORS.white};
  background-image: none;

  width: 100%;
  min-height: ${SPACING.xlarge};
  max-height: ${SPACING.xlarge};

  border: 1px solid ${COLORS.border};
  border-radius: 0;

  color: ${COLORS.purple85};
  line-height: ${SPACING.xlarge};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  padding: 0 ${SPACING.medium} 0 ${SPACING.small};
  text-align: ${textAlign};
  text-align-last: ${textAlign};
  transition: 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: ${BOX_SHADOWS.clickableHover};
    transition: 200ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  width: ${SPACING.base};
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

export const DropdownOptionsContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 5;

  margin: 0;
  border-radius: 0;
  border: 0;
  border-color: ${COLORS.border};
  border-style: solid;
  border-width: 0 1px;
  background: ${COLORS.white};
  box-shadow: ${BOX_SHADOWS.clickable};

  overflow-y: auto;
  max-height: 0;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;

  list-style: none;
  -webkit-overflow-scrolling: touch;

  ${({ isOpen }) =>
    isOpen &&
    css`
      max-height: ${optionsContainerMaxHeight};
      border-bottom-width: 1px;
      transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
    `};
`;

export const DropdownOption = styled.li`
  color: ${COLORS.purple85};
  min-height: ${SPACING.xlarge};

  background-color: ${COLORS.white};
  cursor: pointer;
  padding: 18px ${SPACING.small} 14px ${SPACING.small};

  &:hover {
    background-color: ${COLORS.infoBackground};
  }

  ${({ selected }) =>
    selected &&
    css`
      font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.white};
      color: ${COLORS.textDisabled};
      font-weight: normal;
      cursor: not-allowed;

      &:hover {
        background-color: ${COLORS.white};
        font-weight: normal;
      }
    `};
`;
