import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

import { StatusType } from '.';

export const ChipText = styled.span`
  ${TYPOGRAPHY_STYLE.label};
  font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
  position: relative;
  top: 1px;
`;

const defaultStyle = css`
  background-color: ${COLORS.purple10};
  ${ChipText} {
    color: ${COLORS.primary};
  }
`;

const successStyle = css`
  background-color: ${COLORS.success};
  ${ChipText} {
    color: ${COLORS.white};
  }
`;

const errorStyle = css`
  background-color: ${COLORS.error};
  ${ChipText} {
    color: ${COLORS.white};
  }
`;

const secondaryStyle = css`
  background-color: ${COLORS.white};
  ${ChipText} {
    color: ${COLORS.primary};
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

  ${({ status }) => {
    switch (status) {
      case 'default':
        return defaultStyle;
      case 'success':
        return successStyle;
      case 'error':
        return errorStyle;
      case 'secondary':
        return secondaryStyle;
      // support for old pending and closed status will have default styles
      default:
        return defaultStyle;
    }
  }};
`;
