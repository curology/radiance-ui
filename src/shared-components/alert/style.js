import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import {
  COLORS,
  MEDIA_QUERIES,
  BOX_SHADOWS,
  SPACER,
  ANIMATION,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

const fadeInDesktop = keyframes`
  from { opacity: 0; transform: translate3d(24px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

const fadeInMobile = keyframes`
  from { opacity: 0; transform: translate3d(0, -24px, 0);  }
  to { opacity: 1; transform: translate3d(0, 0px, 0); }
`;

const successAlertStyles = css`
  background-color: ${COLORS.successBackground};
  border-color: ${COLORS.successBorder};
  color: ${COLORS.success};
  fill: ${COLORS.success};
`;

const errorAlertStyles = css`
  background-color: ${COLORS.errorBackground};
  border-color: ${COLORS.errorBorder};
  color: ${COLORS.error};
  fill: ${COLORS.error};
`;

const defaultAlertStyles = css`
  background-color: ${COLORS.defaultBackground};
  border-color: ${COLORS.defaultBorder};
  color: ${COLORS.default};
  fill: ${COLORS.default};
`;

export const AlertContainer = styled.div`
  animation: ${fadeInMobile} ${ANIMATION.defaultTiming} 1;
  border-width: 1px;
  border-style: solid;
  box-shadow: ${BOX_SHADOWS.message};
  cursor: pointer;
  display: flex;
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  margin: 0 auto ${SPACER.small};
  opacity: ${props => (props.exiting ? '0' : '1')};
  padding: 11px 0px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  text-align: left;
  transform: ${props =>
    props.exiting ? 'translate3d(0, -24px, 0)' : 'translate3d(0, 0, 0)'};
  transition: ${ANIMATION.defaultTiming};
  width: 327px;

  ${props => {
    switch (props.alertType) {
      case 'danger':
        return errorAlertStyles;
      case 'success':
        return successAlertStyles;
      default:
        return defaultAlertStyles;
    }
  }};

  ${MEDIA_QUERIES.lgUp} {
    animation: ${fadeInDesktop} ${ANIMATION.defaultTiming} 1;
    font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
    margin-bottom: ${SPACER.medium};
    transform: ${props =>
      props.exiting ? 'translate3d(24px, 0, 0)' : 'translate3d(0, 0, 0)'};
  }
`;

export const AlertsContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: ${SPACER.medium};
  z-index: 99999;

  ${MEDIA_QUERIES.mdUp} {
    left: auto;
    right: ${SPACER.medium};
    top: ${SPACER.medium};
  }
`;

export const AlertContentContainer = styled.div`
  display: flex;
  padding: 0 ${SPACER.large} 0 ${SPACER.medium};
  width: 100%;
`;

export const alertIconStyles = css`
  margin: 2.5px ${SPACER.medium} 0px 0px;
  min-height: ${SPACER.medium};
  min-width: ${SPACER.medium};
`;
