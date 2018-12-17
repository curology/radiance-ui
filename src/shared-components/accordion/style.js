import styled, { css } from 'react-emotion';

import {
  ANIMATION,
  BOX_SHADOWS,
  BREAKPOINTS,
  COLORS,
  SPACING,
} from '../../constants';

const border = `1px solid ${COLORS.border}`;

export const Container = styled.div`
  box-shadow: ${BOX_SHADOWS.boxShadow4};
  background-color: ${COLORS.white};
  max-width: ${BREAKPOINTS.md}px;
`;

export const Content = styled.div`
  padding: ${SPACING.small};
  width: 100%;
`;

export const ExpansionWrapper = styled.div`
  max-height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
`;

const getBorderStyle = isOpen => css`
  border: ${border};

  ${ExpansionWrapper} {
    ${isOpen && `border-top: ${border};`};
  }
`;

export const AccordionBox = styled.div`
  ${({ noBorder, isOpen }) => !noBorder && getBorderStyle(isOpen)};
  width: 100%;

  &:not(:last-child) {
    border-bottom: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.4;
    background-color: ${COLORS.disabled};
    border-color: ${COLORS.purple30};
  `};
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${SPACING.small};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Truncate = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;
