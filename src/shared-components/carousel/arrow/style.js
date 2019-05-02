import styled from '@emotion/styled';

import { SPACING, Z_SCALE } from '../../../constants';

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  z-index: ${Z_SCALE.e2000};
  transform: translate(0%, -50%);
  display: block;

  ${({ prev }) => prev && `left: ${SPACING.xsmall};`};
  ${({ next }) => next && `right: ${SPACING.xsmall};`};

  ${({ disabled }) => disabled && `display: none;`};
`;

export default ArrowContainer;
