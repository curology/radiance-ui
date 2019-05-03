import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../../typography';
import { COLORS, SPACER } from '../../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${SPACER.large};
`;

const thumbnailBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1rem;
`;

export const ImageContainer = styled.div`
  ${thumbnailBase} overflow: hidden;
  height: 1.5rem;
  width: 1rem;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const ThumbnailImage = styled.img`
  min-height: 1.5rem;
  min-width: 1rem;
  object-fit: cover;
`;

export const MultiplesContainer = styled.div`
  ${thumbnailBase}
  background-color: ${COLORS.purple15};
`;

export const MultiplesText = styled.div`
  ${TYPOGRAPHY_STYLE.label};
  font-size: 10px;
`;
