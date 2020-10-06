import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  SPACER, BOX_SHADOWS, COLORS, MEDIA_QUERIES, 
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

export type ContainerType = 'clickable' | 'message';

/**
 * TODO: Determine if we should return a style by default
 * instead of no style at all.
 */
const getContainerTypeStyles = (type?: ContainerType) => {
  switch (type) {
    case 'message':
      return messageStyle;
    case 'clickable':
      return clickableStyle;
    default:
      return css``;
  }
};

export const containerStyles = (type?: ContainerType) => css`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.border};

  ${getContainerTypeStyles(type)};
`;

const Section = styled.div`
  padding: ${SPACER.large};

  ${MEDIA_QUERIES.lgUp} {
    padding-left: ${SPACER.x2large};
    padding-right: ${SPACER.x2large};
  }
`;

const Divider = styled.div`
  margin: 0 ${SPACER.large};
  border-bottom: 1px solid ${COLORS.divider};

  ${MEDIA_QUERIES.lgUp} {
    margin: 0 ${SPACER.x2large};
  }
`;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;

// Our reliance on setting dot.notation subcomponents directly on the
// styled component is not well supported. CompositeContainer defines those
// subcomponents ahead of time to account for styled.div limitations.
const Container = styled.div<{ type?: ContainerType }>`
  ${({ type }) => containerStyles(type)};
`;

export default {
  Container, Divider, Image, Section, 
};
