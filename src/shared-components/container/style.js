import styled from 'react-emotion';

import {
  SPACING,
  BOX_SHADOWS,
  COLORS,
  MEDIA_QUERIES,
} from '../../constants';

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

// TODO update desktop padding to 48px
export const Section  = styled.div`
  padding: ${SPACING.base};

  ${MEDIA_QUERIES.lgUp} {
    padding-left: ${SPACING.large};
    padding-right: ${SPACING.large};
  }
`;

export const Divider = styled.div`
  margin: 0 ${SPACING.base};
  border-bottom: 1px solid ${COLORS.divider};

  ${MEDIA_QUERIES.lgUp} {
    margin: 0 ${SPACING.large};
  }
`;

export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
