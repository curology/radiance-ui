import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACER } from '../../constants';

/* eslint-disable */
export const ChipText = styled.span`
  ${TYPOGRAPHY_STYLE.button};
  letter-spacing: 0.5px;
  font-size: 10px;
  line-height: 1;
  padding: ${SPACER.small} 12px;
  position: relative;
  top: 0.5px;
`;
/* eslint-enable */

const closedStyle = css`
  background-color: ${COLORS.defaultBackground};
  border-color: ${COLORS.defaultBorder};
  ${ChipText} {
    color: ${COLORS.default};
  }
`;

const errorStyle = css`
  background-color: ${COLORS.errorBackground};
  border-color: ${COLORS.errorBorder};
  ${ChipText} {
    color: ${COLORS.error};
  }
`;

const pendingStyle = css`
  background-color: ${COLORS.infoBackground};
  border-color: ${COLORS.infoBorder};
  ${ChipText} {
    color: ${COLORS.info};
  }
`;

const successStyle = css`
  background-color: ${COLORS.successBackground};
  border-color: ${COLORS.successBorder};
  ${ChipText} {
    color: ${COLORS.success};
  }
`;

export const ChipStyles = styled.div`
  align-items: center;
  border-radius: ${SPACER.medium};
  border: 1px solid;
  display: inline-flex;
  height: ${SPACER.large};
  justify-content: center;
  min-width: ${SPACER.xlarge};

  ${({ status }) => {
    switch (status) {
      case 'pending':
        return pendingStyle;
      case 'error':
        return errorStyle;
      case 'success':
        return successStyle;
      case 'closed':
        return closedStyle;
      default:
        break;
    }
  }};
`;
