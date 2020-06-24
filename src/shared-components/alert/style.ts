import styled from '@emotion/styled';
import { css, keyframes, SerializedStyles } from '@emotion/core';

import {
  COLORS,
  MEDIA_QUERIES,
  SPACER,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

export const AlertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: ${SPACER.medium};
  left: 0;
  right: 0;
  z-index: 99999;

  ${MEDIA_QUERIES.mdUp} {
    left: auto;
    right: ${SPACER.medium};
  }
`;

const fadeInDesktop = keyframes`
  from { opacity: 0; transform: translate3d(24px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const fadeInMobile = keyframes`
  from { opacity: 0; transform: translate3d(0, -24px, 0);  }
  to { opacity: 1; transform: translate3d(0, 0px, 0); }
`;

const defaultAlertStyles = css`
  background-color: ${COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
`;

const successAlertStyles = css`
  background-color: ${COLORS.success};
  box-shadow: 0px 8px 24px rgba(43, 110, 51, 0.05);
`;

const errorAlertStyles = css`
  background-color: ${COLORS.error};
  box-shadow: 0px 8px 24px rgba(189, 32, 15, 0.05);
`;

export const AlertContainer = styled.div<{
  exiting: boolean;
  alertType: string;
}>`
  cursor: pointer;
  position: relative;
  margin: 0 auto ${SPACER.small};
  padding: 0;
  width: 327px;
  border-radius: ${SPACER.small};
  opacity: ${({ exiting }): string => (exiting ? '0' : '1')};
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  transition: ${ANIMATION.defaultTiming};
  transform: ${({ exiting }): string =>
    exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};

  ${({ alertType }): SerializedStyles => {
    switch (alertType) {
      case 'danger':
        return errorAlertStyles;
      case 'error':
        return errorAlertStyles;
      case 'success':
        return successAlertStyles;
      default:
        return defaultAlertStyles;
    }
  }};

  ${MEDIA_QUERIES.mdUp} {
    animation: ${fadeInDesktop} ${ANIMATION.defaultTiming} 1;
    margin: 0 auto ${SPACER.medium};
    transform: ${({ exiting }): string =>
    exiting ? 'translate3d(24px, 0, 0)' : 'translate3d(0, 0, 0)'};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${COLORS.white};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  padding: ${SPACER.medium};
`;

export const ContentContainer = styled.div<{ truncateText: boolean }>`
  margin: -3px 0 0 ${SPACER.medium};
  max-height: ${({ truncateText }): string => (truncateText ? '48px' : 'none')};
`;

export const CtaContent = styled.div`
  padding: ${SPACER.medium};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.white};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const IconContainer = styled.div<{ hasAvatar: boolean }>`
  ${({ hasAvatar }): SerializedStyles | false =>
    hasAvatar &&
    css`
      min-width: 32px;
    `};

  svg {
    height: ${SPACER.medium};
    width: ${SPACER.medium};
    fill: ${COLORS.white};
  }
`;
