import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  ANIMATION,
  BREAKPOINTS,
  BOX_SHADOWS,
  COLORS,
  SPACER,
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
  noBorder: boolean;
  isOpen: boolean;
  disabled: boolean;
}>`
  ${({ noBorder, isOpen }) => (!noBorder ? getBorderStyle(isOpen) : '')};

  position: relative;

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

export const TitleWrapper = styled.div<{
  borderRadius: string;
  disabled: boolean;
  isOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focusSecondary};
  }

  ${AccordionBox}:last-of-type & {
    &:focus {
      ${({ borderRadius, isOpen }) =>
    !isOpen &&
        `
        border-bottom-left-radius: ${borderRadius}; 
        border-bottom-right-radius: ${borderRadius};
        `}}
    }
  }
`;

export const Truncate = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

/**
 * borderRadius must match borderRadius passed to main <Accordion />
 * component if opting out of default values.
 */
export const Container = styled.div<{ borderRadius?: string }>`
  box-shadow: ${BOX_SHADOWS.clickable};
  background-color: ${COLORS.white};
  max-width: ${BREAKPOINTS.md}px;

  ${({ borderRadius = '4px' }) => `
    > div:first-of-type {
      border-top-left-radius: ${borderRadius};
      border-top-right-radius: ${borderRadius};

      ${TitleWrapper} {
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
      }

      ${AccordionBox} {
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
      }
    }
  
    > div:last-of-type {
      border-bottom-left-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
  
      ${AccordionBox} {
        border-bottom-left-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};
      }
    }
`}
`;
