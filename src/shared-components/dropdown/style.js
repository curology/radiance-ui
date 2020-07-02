import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  COLORS,
  BOX_SHADOWS,
  SPACER,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

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
  min-height: ${SPACER.x4large};
  max-height: ${SPACER.x4large};

  border: 1px solid ${COLORS.border};
  border-radius: 0;

  color: ${COLORS.purple85};
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

  ${({ isOpen, optionsContainerMaxHeight }) =>
    isOpen &&
    css`
      max-height: ${optionsContainerMaxHeight};
      border-bottom-width: 1px;
      transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
    `};
`;

export const DropdownOption = styled.li`
  color: ${COLORS.purple85};
  min-height: ${SPACER.x4large};

  background-color: ${COLORS.white};
  cursor: pointer;
  padding: 18px ${SPACER.medium} 14px ${SPACER.medium};

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
