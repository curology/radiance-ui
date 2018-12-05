import styled, { css } from 'react-emotion';

import { COLORS, SPACING } from '../../constants';
import { style } from '../typography';

export const Container = styled.div`
  ${style.body};
  border: 1px solid ${COLORS.purple15};
  min-width: 250px;
  background-color: ${COLORS.white};
  text-align: left;

  ${({clickable}) => clickable && css`cursor: pointer;`};
  ${({columns}) => columns && css`
    display: flex;
    flex-direction: row;
  `};
`;

export const Section = styled.div`
  margin: 0 ${SPACING.base};
  padding: ${SPACING.base} 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.purple15};
  }
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  
  &:not(:last-child) {
    margin-bottom: ${SPACING.small};
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: cover;
`;