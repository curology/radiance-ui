import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  ANIMATION, BOX_SHADOWS, COLORS, SPACER, 
} from 'src/constants';

const border = `1px solid ${COLORS.border}`;

export const Content = styled.div`
  padding: ${SPACER.medium};
  width: 100%;
`;

export const ExpansionWrapper = styled.div<{ contentHeight: string }>`
  max-height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
`;

const getBorderStyle = (isOpen: boolean) => css`
  border: ${border};

  ${ExpansionWrapper} {
    ${isOpen && `border-top: ${border};`};
  }
`;

export const AccordionBox = styled.div<{
  borderRadius: string;
  noBorder: boolean;
  isOpen: boolean;
  disabled: boolean;
}>`
  ${({ borderRadius }) => `border-radius: ${borderRadius}`};

  ${({ noBorder, isOpen }) => (!noBorder ? getBorderStyle(isOpen) : '')};

  width: 100%;

  &:not(:last-child) {
    border-bottom: none;
  }

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.4;
    background-color: ${COLORS.disabled};
    border-color: ${COLORS.purple30};
  `
      : ''};
`;

export const ArrowWrapper = styled.div<{ rightAlign: boolean }>`
  display: flex;
  align-items: center;

  ${({ rightAlign }) =>
    rightAlign
      ? `padding-left: ${SPACER.medium};`
      : `padding: 0 ${SPACER.medium};`};
`;

export const TitleWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focusSecondary};
  }
`;

export const Truncate = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;
