import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  COLORS,
  SPACER,
  BOX_SHADOWS,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

export const MainContainer = styled.div`
  position: relative;
  align-items: left;
  flex-direction: column-reverse;
`;

export const Trigger = styled.div`
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          top: 120%;
        `;
      case 'top':
        return css`
          bottom: 120%;
        `;
      default:
        break;
    }
  }};

  ${({ arrowAlign }) => {
    switch (arrowAlign) {
      case 'left':
        return css`
          left: 0;
        `;
      case 'right':
        return css`
          right: 0;
        `;
      default:
        break;
    }
  }};

  ${({ nudgeRight }) =>
    nudgeRight &&
    css`
      right: ${nudgeRight * -1}px;
    `};

  ${({ nudgeLeft }) =>
    nudgeLeft &&
    css`
      left: ${nudgeLeft * -1}px;
    `};

  ${({ nudgeTop }) =>
    nudgeTop &&
    css`
      top: ${nudgeTop * -1}px;
      bottom: auto;
    `};

  ${({ nudgeBottom }) =>
    nudgeBottom &&
    css`
      bottom: ${nudgeBottom * -1}px;
      top: auto;
    `};

  ${({ alignRightPercent }) =>
    alignRightPercent &&
    css`
      right: ${alignRightPercent}%;
      margin-right: -69px;
    `};

  ${({ alignTopPercent }) =>
    alignTopPercent &&
    css`
      top: ${alignTopPercent}%;
      bottom: auto;
    `};

  background: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  box-shadow: ${BOX_SHADOWS.message};
  color: ${COLORS.purpleTint2};
  min-width: 100px;
  opacity: ${({ open }) => (open ? '1' : '0')};
  padding: 11px ${SPACER.medium};
  pointer-events: none;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-8px)')};
  transition-delay: 30ms;
  transition-timing-function: ease-in-out;
  transition: 350ms;
  z-index: 5;
  text-align: left;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  display: ${({ displayTooltip }) => (displayTooltip ? 'block' : 'none')};

  &::after {
    ${({ position }) => {
      switch (position) {
        case 'bottom':
          return css`
            top: -10px;
            transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
          `;
        case 'top':
          return css`
            bottom: -7px;
            transform: rotate(-240deg) skewX(-30deg) scale(1, 0.866);
          `;
        default:
          break;
      }
    }};

    ${({ arrowAlign }) => {
      switch (arrowAlign) {
        case 'left':
          return css`
            left: 10.25%;
          `;
        case 'right':
          return css`
            right: 10.25%;
          `;
        case 'middle':
          return css`
            left: 45%;
          `;
        default:
          break;
      }
    }};

    background: ${COLORS.white};
    border-top-right-radius: 20%;
    border-color: ${COLORS.border};
    border-style: solid;
    border-width: 1px 1px 0 0;
    content: '';
    height: 12px;
    position: absolute;
    width: 12px;
    margin-top: 3px;
  }
`;
