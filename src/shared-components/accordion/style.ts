import styled from '@emotion/styled';

import { ANIMATION, BREAKPOINTS, SPACER, ThemeType } from '../../constants';

const Content = styled.div`
  padding: ${SPACER.medium};
  width: 100%;
`;

const ExpansionWrapper = styled.div<{ contentHeight: string }>`
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

const AccordionBox = styled.div<{
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

const ArrowWrapper = styled.div<{ rightAlign: boolean }>`
  display: flex;
  align-items: center;

  ${({ rightAlign }) =>
    rightAlign
      ? `padding-left: ${SPACER.medium};`
      : `padding: 0 ${SPACER.medium};`};
`;

const TitleWrapper = styled.div<{
  borderRadius: keyof ThemeType['BORDER_RADIUS'];
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
          const borderRadiusValue = theme.BORDER_RADIUS[borderRadius];

          return `border-bottom-left-radius: ${borderRadiusValue}; 
                  border-bottom-right-radius: ${borderRadiusValue};`;
        }
        return '';
      }}}
    }
  }
`;

const Truncate = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

/**
 * borderRadius must match borderRadius passed to main <Accordion />
 * component if opting out of default values.
 */
const Container = styled.div<{
  borderRadius?: keyof ThemeType['BORDER_RADIUS'];
}>`
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.clickable};
  background-color: ${({ theme }) => theme.COLORS.white};
  max-width: ${BREAKPOINTS.md}px;

  ${({ borderRadius = 'small', theme }) => {
    const borderRadiusValue = theme.BORDER_RADIUS[borderRadius];

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

export default {
  AccordionBox,
  ArrowWrapper,
  Container,
  Content,
  ExpansionWrapper,
  TitleWrapper,
  Truncate,
};
