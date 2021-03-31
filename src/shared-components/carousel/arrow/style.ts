import styled from '@emotion/styled';

import { SPACER, Z_SCALE } from '../../../constants';

const ArrowContainer = styled.div<{
  disabled: boolean;
  next: boolean;
  prev: boolean;
}>`
  position: absolute;
  top: 50%;
  z-index: ${Z_SCALE.e2000};
  transform: translate(0%, -50%);
  display: block;

  ${({ prev }) => (prev ? `left: ${SPACER.small};` : '')}
  ${({ next }) => (next ? `right: ${SPACER.small};` : '')}

  ${({ disabled }) => (disabled ? `display: none;` : '')}
`;

const BottomRightAlignedArrowContainer = styled.div<{
  disabled: boolean;
  next: boolean;
  prev: boolean;
}>`
  display: block;
  align-self: flex-end;
  margin: ${SPACER.small};

  ${({ prev }) => (prev ? `order: 2; margin-left: auto;` : '')}
  ${({ next }) => (next ? `order: 3;` : '')}

  ${({ disabled, theme }) =>
    disabled
      ? `
      button {
        background-color: none;
        border-color: ${theme.COLORS.primary};
        color: ${theme.COLORS.primary};

        &:hover {
          color: ${theme.COLORS.primary};
        }
      }
    `
      : ''};
`;

export default { ArrowContainer, BottomRightAlignedArrowContainer };
