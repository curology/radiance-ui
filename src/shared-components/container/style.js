import styled, { css } from 'react-emotion';

import {
  SPACING,
  BOX_SHADOWS,
  COLORS,
  MEDIA_QUERIES,
} from '../../constants';

const clickableStyle = css`
  box-shadow: ${BOX_SHADOWS.clickable};
  cursor: pointer;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: ${BOX_SHADOWS.clickableHover};
  }
`;

const messageStyle = css`
  border-radius: 16px;
  box-shadow: ${BOX_SHADOWS.message};
`;

export const Container = styled.div`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.border};

  ${({ type }) => {
    switch (type) {
      case 'message':
        return messageStyle;
      case 'clickable':
        return clickableStyle;
      default:
        return null;
    }
  }};
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
