import styled from '@emotion/styled';

import { SPACER } from '../../constants';

import { ArrowAlignTypes, PositionTypes } from '.';

export const MainContainer = styled.div`
  position: relative;
  align-items: left;
  flex-direction: column-reverse;
`;

export const Trigger = styled.div`
  cursor: pointer;
`;

export const TooltipBox = styled.div<{
  alignRightPercent: number;
  alignTopPercent: number;
  arrowAlign: ArrowAlignTypes;
  displayTooltip: boolean;
  hasRestrictedWidth: boolean;
  isSmall: boolean;
  nudgeLeft: number;
  nudgeRight: number;
  nudgeTop: number;
  nudgeBottom: number;
  position: PositionTypes;
  open: boolean;
}>`
  max-width: ${({ hasRestrictedWidth }) =>
    hasRestrictedWidth ? '327px' : 'none'};

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return `
          top: 120%;
        `;
      case 'top':
        return `
          bottom: 120%;
        `;
      default:
        return '';
    }
  }};

  ${({ arrowAlign }) => {
    switch (arrowAlign) {
      case 'left':
        return `
          left: 0;
        `;
      case 'right':
        return `
          right: 0;
        `;
      default:
        return '';
    }
  }};

  ${({ nudgeRight }) =>
    nudgeRight &&
    `
      right: ${nudgeRight * -1}px;
    `};

  ${({ nudgeLeft }) =>
    nudgeLeft &&
    `
      left: ${nudgeLeft * -1}px;
    `};

  ${({ nudgeTop }) =>
    nudgeTop &&
    `
      top: ${nudgeTop * -1}px;
      bottom: auto;
    `};

  ${({ nudgeBottom }) =>
    nudgeBottom &&
    `
      bottom: ${nudgeBottom * -1}px;
      top: auto;
    `};

  ${({ alignRightPercent }) =>
    alignRightPercent &&
    `
      right: ${alignRightPercent}%;
      margin-right: -69px;
    `};

  ${({ alignTopPercent }) =>
    alignTopPercent &&
    `
      top: ${alignTopPercent}%;
      bottom: auto;
    `};

  background: ${({ theme }) => theme.COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
  border-radius: ${({ isSmall, theme }) =>
    isSmall ? theme.BORDER_RADIUS.small : theme.BORDER_RADIUS.medium};
  color: ${({ theme }) => theme.COLORS.white};
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
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSize.caption};
  display: ${({ displayTooltip }) => (displayTooltip ? 'block' : 'none')};
`;

export const TooltipContent = styled.div`
  z-index: 5;
  position: relative;
`;

export const ArrowImageContainer = styled.div<{
  arrowAlign: ArrowAlignTypes;
  position: PositionTypes;
}>`
  position: absolute;
  z-index: 4;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return `
          top: -8px;
          transform: rotate(180deg);
        `;
      case 'top':
        return `
          bottom: -8px;
        `;
      default:
        return '';
    }
  }};

  ${({ arrowAlign }) => {
    switch (arrowAlign) {
      case 'left':
        return `
          left: 10.25%;
        `;
      case 'right':
        return `
          right: 10.25%;
        `;
      case 'middle':
        return `
          left: 50%;
          margin-left: -10px;
        `;
      default:
        return '';
    }
  }};
`;
