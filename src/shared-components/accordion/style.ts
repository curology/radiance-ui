import styled from '@emotion/styled';

import { ANIMATION, BREAKPOINTS, SPACER, ThemeType } from '../../constants';

import { BorderRadiusValues } from '.';

export const Content = styled.div`
  padding: ${SPACER.medium};
  width: 100%;
`;

export const ExpansionWrapper = styled.div<{ contentHeight: string }>`
  max-height: ${({ contentHeight }) => contentHeight};
  overflow: hidden;
  transition: max-height ${ANIMATION.defaultTiming} ease-in-out;
`;

const getBorderStyle = (theme: ThemeType, isOpen: boolean) => `
  border: 1px solid ${theme.COLORS.border};

  ${ExpansionWrapper} {
    ${isOpen ? `border-top: 1px solid ${theme.COLORS.border};` : ''}
  }
`;

export const AccordionBox = styled.div<{
  disabled: boolean;
  isOpen: boolean;
  noBorder: boolean;
}>`
  ${({ noBorder, isOpen, theme }) =>
    !noBorder ? getBorderStyle(theme, isOpen) : ''}

  width: 100%;

  &:not(:last-child) {
    border-bottom: none;
  }

  ${({ disabled, theme }) =>
    disabled
      ? `
    opacity: 0.4;
    background-color: ${theme.COLORS.defaultLight};
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
  borderRadius?: BorderRadiusValues;
  disabled: boolean;
  isOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focusInner};
  }

  ${AccordionBox}:last-of-type & {
    &:focus {
      ${({ borderRadius, isOpen, theme }) => {
        if (!isOpen) {
          const borderRadiusValue = borderRadius || theme.BORDER_RADIUS.small;
          return `border-bottom-left-radius: ${borderRadiusValue}; 
                  border-bottom-right-radius: ${borderRadiusValue};`;
        }
        return '';
      }}}
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
  borderRadius?: BorderRadiusValues;
}>`
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.clickable};
  background-color: ${({ theme }) => theme.COLORS.white};
  max-width: ${BREAKPOINTS.md}px;

  ${({ borderRadius, theme }) => {
    const borderRadiusValue = borderRadius || theme.BORDER_RADIUS.small;

    return `
    > div:first-of-type {
      border-top-left-radius: ${borderRadiusValue};
      border-top-right-radius: ${borderRadiusValue};

      ${TitleWrapper} {
        border-top-left-radius: ${borderRadiusValue};
        border-top-right-radius: ${borderRadiusValue};
      }

      ${AccordionBox} {
        border-top-left-radius: ${borderRadiusValue};
        border-top-right-radius: ${borderRadiusValue};
      }
    }

    > div:last-of-type {
      border-bottom-left-radius: ${borderRadiusValue};
      border-bottom-right-radius: ${borderRadiusValue};

      ${AccordionBox} {
        border-bottom-left-radius: ${borderRadiusValue};
        border-bottom-right-radius: ${borderRadiusValue};
      }
    }
  `;
  }}
`;
