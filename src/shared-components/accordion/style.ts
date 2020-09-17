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

const getTopBorderRadius = (borderRadius: string) => ({
  borderTopLeftRadius: borderRadius,
  borderTopRightRadius: borderRadius,
});

const getBottomBorderRadius = (borderRadius: string) => ({
  borderBottomLeftRadius: borderRadius,
  borderBottomRightRadius: borderRadius,
});

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

  div:last-of-type & {
    &:focus {
      ${({ borderRadius, isOpen }) => {
    const {
      borderBottomLeftRadius,
      borderBottomRightRadius,
    } = getBottomBorderRadius(borderRadius);

    return (
      !isOpen &&
          `
        border-bottom-left-radius: ${borderBottomLeftRadius}; 
        border-bottom-right-radius: ${borderBottomRightRadius};
        `
    );
  }}
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

  ${({ borderRadius = '4px' }) => {
    const { borderTopLeftRadius, borderTopRightRadius } = getTopBorderRadius(
      borderRadius,
    );
    const {
      borderBottomLeftRadius,
      borderBottomRightRadius,
    } = getBottomBorderRadius(borderRadius);

    return `
    > div:first-of-type {
      border-top-left-radius: ${borderTopLeftRadius};
      border-top-right-radius: ${borderTopRightRadius};

      ${TitleWrapper} {
        border-top-left-radius: ${borderTopLeftRadius};
        border-top-right-radius: ${borderTopRightRadius};
      }

      ${AccordionBox} {
        border-top-left-radius: ${borderTopLeftRadius};
        border-top-right-radius: ${borderTopRightRadius};
      }
    }
  
    > div:last-of-type {
      border-bottom-left-radius: ${borderBottomLeftRadius};
      border-bottom-right-radius: ${borderBottomRightRadius};
  
      ${AccordionBox} {
        border-bottom-left-radius: ${borderBottomLeftRadius};
        border-bottom-right-radius: ${borderBottomRightRadius};
      }
    }
`;
  }}
`;
