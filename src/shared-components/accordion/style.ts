import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

import {
  ANIMATION,
  BOX_SHADOWS,
  BREAKPOINTS,
  COLORS,
  SPACER,
} from '../../constants';

const border = `1px solid ${COLORS.border}`;

export const Container = styled.div`
  box-shadow: ${BOX_SHADOWS.boxShadow4};
  background-color: ${COLORS.white};
  max-width: ${BREAKPOINTS.md}px;
`;

export const Content = styled.div`
  padding: ${SPACER.medium};
  width: 100%;
`;

export const ExpansionWrapper = styled.div<{ contentHeight: string }>`
  max-height: ${({ contentHeight }): string => contentHeight};
  overflow: hidden;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
`;

const getBorderStyle = (isOpen: boolean): SerializedStyles => css`
  border: ${border};

  ${ExpansionWrapper} {
    ${isOpen && `border-top: ${border};`};
  }
`;

export const AccordionBox = styled.div<{
  noBorder: boolean;
  isOpen: boolean;
  disabled: boolean;
}>`
  ${({ noBorder, isOpen }): SerializedStyles | false =>
    !noBorder && getBorderStyle(isOpen)};

  width: 100%;

  &:not(:last-child) {
    border-bottom: none;
  }

  ${({ disabled }): string | false =>
    disabled &&
    `
    opacity: 0.4;
    background-color: ${COLORS.disabled};
    border-color: ${COLORS.purple30};
  `};
`;

export const ArrowWrapper = styled.div<{ rightAlign: boolean }>`
  display: flex;
  align-items: center;

  ${({ rightAlign }): string =>
    rightAlign
      ? `padding-left: ${SPACER.medium};`
      : `padding: 0 ${SPACER.medium};`};
`;

export const TitleWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Truncate = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;
