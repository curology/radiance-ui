import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  ANIMATION, BREAKPOINTS, BOX_SHADOWS, SPACER, 
} from 'src/constants';
import { ThemeType } from 'src/constants/themes/types';

export const Content = styled.div`
  padding: ${SPACER.medium};
  width: 100%;
`;

export const ExpansionWrapper = styled.div<{ contentHeight: string }>`
  max-height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
`;

const getBorderStyle = (theme: ThemeType, isOpen: boolean) => css`
  border: 1px solid ${theme.COLORS.border};

  ${ExpansionWrapper} {
    ${isOpen && `border-top: 1px solid ${theme.COLORS.border}`};
  }
`;

export const AccordionBox = styled.div<{
  noBorder: boolean;
  isOpen: boolean;
  disabled: boolean;
  theme?: ThemeType;
}>`
  ${({ noBorder, isOpen, theme }) =>
    !noBorder ? getBorderStyle(theme, isOpen) : ''};

  width: 100%;

  &:not(:last-child) {
    border-bottom: none;
  }

  ${({ disabled, theme }) =>
    disabled
      ? `
    opacity: 0.4;
    background-color: ${theme.COLORS.disabled};
    border-color: ${theme.COLORS.primaryTint3};
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
    box-shadow: ${BOX_SHADOWS.focusInner};
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
export const Container = styled.div<{
  borderRadius?: string;
  theme?: ThemeType;
}>`
  box-shadow: ${BOX_SHADOWS.clickable};
  background-color: ${({ theme }) => theme.COLORS.white};
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
