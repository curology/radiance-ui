import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { COLORS, SPACER, Z_SCALE } from '../../../constants';

export const ArrowContainer = styled.div<{
  prev: boolean;
  next: boolean;
  disabled: boolean;
}>`
  position: absolute;
  top: 50%;
  z-index: ${Z_SCALE.e2000};
  transform: translate(0%, -50%);
  display: block;

  ${({ prev }) => prev && `left: ${SPACER.small};`};
  ${({ next }) => next && `right: ${SPACER.small};`};

  ${({ disabled }) => disabled && `display: none;`};
`;

export const BottomRightAlignedArrowContainer = styled.div<{
  prev: boolean;
  next: boolean;
  disabled: boolean;
}>`
  position: absolute;
  top: 50%;
  z-index: ${Z_SCALE.e2000};
  transform: translate(0%, -50%);
  display: block;

  ${({ prev }) => prev && `left: ${SPACER.small};`};
  ${({ next }) => next && `right: ${SPACER.small};`};

  ${({ disabled }) =>
    disabled &&
    css`
      button {
        background-color: none;
        border-color: ${COLORS.primary};
        color: ${COLORS.primary};
      }
    `};
`;
