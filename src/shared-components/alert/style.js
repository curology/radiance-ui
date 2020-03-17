import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

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

export const AlertContainer = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0 auto ${SPACER.small};
  padding: 0;
  width: 327px;
  border-radius: ${SPACER.small};
  opacity: ${props => (props.exiting ? '0' : '1')};
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  transition: ${ANIMATION.defaultTiming};
  transform: ${({ exiting }) =>
    exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};

  ${({ alertType }) => {
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
    transform: ${({ exiting }) =>
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

export const ContentContainer = styled.div`
  margin: -3px 0 0 ${SPACER.medium};
  max-height: 48px;
`;

export const CtaContent = styled.div`
  padding: ${SPACER.medium};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.white};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};

  ${({ alertType }) => {
    switch (alertType) {
      case 'danger':
        return css`
          border-top: 1px solid ${COLORS.errorBorder};
        `;
      case 'error':
        return css`
          border-top: 1px solid ${COLORS.errorBorder};
        `;
      case 'success':
        return css`
          border-top: 1px solid ${COLORS.successBorder};
        `;
      default:
        return css`
          border-top: 1px solid ${COLORS.infoBorder};
        `;
    }
  }};
`;

export const IconContainer = styled.div`
  ${({ hasAvatar }) =>
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
