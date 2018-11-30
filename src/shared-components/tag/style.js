import styled, { css } from 'react-emotion';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACING } from '../../constants';

const closedStyle = css`
  background-color: ${COLORS.statusGreyBackground};
  border-color: ${COLORS.statusGreyBorder};
  span {
    color: ${COLORS.statusGrey};
  }
`;

const errorStyle = css`
  background-color: ${COLORS.statusRedBackground};
  border-color: ${COLORS.statusRedBorder};
  span {
    color: ${COLORS.statusRed};
  }
`;

const pendingStyle = css`
  background-color: ${COLORS.statusPurpleBackground};
  border-color: ${COLORS.statusPurpleBorder};
  span {
    color: ${COLORS.statusPurple};
  }
`;

const successStyle = css`
  background-color: ${COLORS.statusGreenBackground};
  border-color: ${COLORS.statusGreenBorder};
  span {
    color: ${COLORS.statusGreen};
  }
`;

export const TagStyles = styled.div`
  align-items: center;
  border-radius: ${SPACING.small};
  border: 1px solid;
  display: inline-flex;
  height: ${SPACING.base};
  justify-content: center;
  min-width: ${SPACING.medium};

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

/* eslint-disable */
export const TagText = styled.span`
  ${TYPOGRAPHY_STYLE.button};
  letter-spacing: 0.5px;
  font-size: 10px;
  line-height: 1;
  padding: ${SPACING.xsmall} 12px;
  position: relative;
  top: 0.5px;
`;
/* eslint-enable */

