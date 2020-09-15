import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  ANIMATION, BOX_SHADOWS, COLORS, SPACER, 
} from 'src/constants';

import AccordionContainerStyle from './accordionContainer/style';

const border = `1px solid ${COLORS.border}`;

const setTopBorderRadius = (borderRadius: string) =>
  `${borderRadius} ${borderRadius} 0 0`;

const setBottomBorderRadius = (borderRadius: string) =>
  `0 0 ${borderRadius} ${borderRadius}`;

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

  ${AccordionContainerStyle.Container}:last-of-type & {
    &:focus {
      border-radius: ${({ borderRadius, isOpen }) =>
    isOpen ? '0' : setBottomBorderRadius(borderRadius)};
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
 *
 * Also requires that Accordion uses withContainer prop
 */
export const Grouping = styled.div<{ borderRadius?: string }>`
  ${({ borderRadius = '4px' }) => `
    > div:first-of-type {
      ${TitleWrapper} {
        border-radius: 
          ${setTopBorderRadius(borderRadius)};
      }

      ${AccordionContainerStyle.Container} {
        border-radius: 
          ${setTopBorderRadius(borderRadius)};
      }
  
      ${AccordionBox} {
        border-radius: 
          ${setTopBorderRadius(borderRadius)};
      }
  
    }
  
    > div:last-of-type {
      ${TitleWrapper} {
        &:focus {

        }
      }

      ${AccordionContainerStyle.Container} {
        border-radius: 
          ${setBottomBorderRadius(borderRadius)};
      }
  
      ${AccordionBox} {
        border-radius: 
          ${setBottomBorderRadius(borderRadius)};
      }
    }
    `}
`;
