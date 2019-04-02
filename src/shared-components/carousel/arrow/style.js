import styled from '@emotion/styled';

import { SPACING, COLORS, ANIMATION } from '../../../constants';

const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 2000;
  padding: ${SPACING.small};
  background-color: ${COLORS.white};
  border-radius: 50%;
  border: 1px solid ${COLORS.border};
  transform: scale(1, 1) translate(0%, -50%);
  transition: all ${ANIMATION.defaultTiming};
  display: block;

  ${({ prev }) => prev && `left: ${SPACING.xsmall};`};
  ${({ next }) => next && `right: ${SPACING.xsmall};`};

  ${({ disabled }) => disabled && `display: none;`};

  &:hover {
    transform: scale(1.1, 1.1) translate(0%, -50%);
  }
`;

export default ArrowContainer;
