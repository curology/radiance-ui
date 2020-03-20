import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLORS, SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

export const MainContainer = styled.div`
  position: relative;
  align-items: left;
  flex-direction: column-reverse;
`;

export const Trigger = styled.div`
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  max-width: ${({ hasRestrictedWidth }) =>
    hasRestrictedWidth ? '327px' : 'none'};

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

  background: ${COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
  border-radius: ${({ isSmall }) => (isSmall ? SPACER.xsmall : SPACER.small)};
  color: ${COLORS.white};
  min-width: ${({ isSmall }) => (isSmall ? '0px' : '100px')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  padding: ${({ isSmall }) =>
    isSmall ? `${SPACER.x2small} ${SPACER.small}` : SPACER.medium};
  pointer-events: none;
  position: absolute;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-8px)')};
  transition-delay: 30ms;
  transition-timing-function: ease-in-out;
  transition: 350ms;
  z-index: 5;
  text-align: left;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  display: ${({ displayTooltip }) => (displayTooltip ? 'block' : 'block')};
`;

export const TooltipContent = styled.div`
  z-index: 5;
  position: relative;
`;

export const ArrowImageContainer = styled.div`
  position: absolute;
  z-index: 4;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          top: -8px;
          transform: rotate(180deg);
        `;
      case 'top':
        return css`
          bottom: -8px;
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
          left: 50%;
          margin-left: -10px;
        `;
      default:
        break;
    }
  }};
`;
