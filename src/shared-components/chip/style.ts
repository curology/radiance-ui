import styled from '@emotion/styled';
import { ThemeType } from 'src/constants/themes/types';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

import { StatusType } from '.';

export const ChipText = styled.span`
  ${TYPOGRAPHY_STYLE.label};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  position: relative;
  top: 1px;
`;

const defaultStyle = (theme: ThemeType) => `
  background-color: ${theme.COLORS.defaultBackground};
  ${ChipText} {
    color: ${theme.COLORS.primary};
  }
`;

const successStyle = (theme: ThemeType) => `
  background-color: ${theme.COLORS.success};
  ${ChipText} {
    color: ${theme.COLORS.white};
  }
`;

const errorStyle = (theme: ThemeType) => `
  background-color: ${theme.COLORS.error};
  ${ChipText} {
    color: ${theme.COLORS.white};
  }
`;

const secondaryStyle = (theme: ThemeType) => `
  background-color: ${theme.COLORS.white};
  ${ChipText} {
    color: ${theme.COLORS.primary};
  }
`;

export const ChipStyles = styled.div<{ status: StatusType }>`
  align-items: center;
  border-radius: ${SPACER.xsmall};
  display: inline-flex;
  height: ${SPACER.large};
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 ${SPACER.small};

  ${({ status, theme }) => {
    switch (status) {
      case 'default':
        return defaultStyle(theme);
      case 'success':
        return successStyle(theme);
      case 'error':
        return errorStyle(theme);
      case 'secondary':
        return secondaryStyle(theme);
      // support for old pending and closed status will have default styles
      default:
        return defaultStyle(theme);
    }
  }};
`;
