import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { MEDIA_QUERIES, SPACER, ANIMATION, ThemeType } from '../../constants';

import type { AlertType } from '.';

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

const defaultAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.primary};
  box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
`;

const successAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.success};
  box-shadow: 0px 8px 24px rgba(43, 110, 51, 0.05);
`;

const errorAlertStyles = (theme: ThemeType) => `
  background-color: ${theme.COLORS.error};
  box-shadow: 0px 8px 24px rgba(189, 32, 15, 0.05);
`;

export const AlertContainer = styled.button<{
  alertType: AlertType;
  exiting: boolean;
}>`
  border: none;
  text-align: left;
  cursor: pointer;
  position: relative;
  margin: 0 auto ${SPACER.small};
  padding: 0;
  width: 327px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
  opacity: ${({ exiting }) => (exiting ? '0' : '1')};
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  transition: ${ANIMATION.defaultTiming};
  transform: ${({ exiting }) =>
    exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
  }

  ${({ alertType, theme }) => {
    switch (alertType) {
      case 'danger':
        return errorAlertStyles(theme);
      case 'error':
        return errorAlertStyles(theme);
      case 'success':
        return successAlertStyles(theme);
      default:
        return defaultAlertStyles(theme);
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
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSize.caption};
  padding: ${SPACER.medium};
`;

export const ContentContainer = styled.div<{ truncateText: boolean }>`
  margin: -3px 0 0 ${SPACER.medium};
  max-height: ${({ truncateText }) => (truncateText ? '48px' : 'none')};
`;

export const CtaContent = styled.div`
  padding: ${SPACER.medium};

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSize.caption};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const IconContainer = styled.div<{ hasAvatar: boolean }>`
  ${({ hasAvatar }) =>
    hasAvatar &&
    `
      min-width: 32px;
    `};

  svg {
    height: ${SPACER.medium};
    width: ${SPACER.medium};
    fill: ${({ theme }) => theme.COLORS.white};
  }
`;
