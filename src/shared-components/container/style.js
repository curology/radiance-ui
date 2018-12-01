import styled from 'react-emotion';

import { BOX_SHADOWS, COLORS } from '../../constants';

export const Container = styled.div`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.border};
`;

export const ClickableContainer = styled(Container)`
  box-shadow: ${BOX_SHADOWS.clickable};
  cursor: pointer;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: ${BOX_SHADOWS.clickableHover};
  }
`;

export const MessageContainer = styled(Container)`
  border-radius: 16px;
  box-shadow: ${BOX_SHADOWS.message};
`;
