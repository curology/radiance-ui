import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Typography from '../typography';
import {
  COLORS,
  MEDIA_QUERIES,
  SPACER,
  Z_SCALE,
  TYPOGRAPHY_CONSTANTS,
} from '../../constants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(58, 55, 75, 0.7);
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
  transition: opacity 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering {
    opacity: 0;
  }

  &.entered {
    opacity: 1;
  }

  &.exiting {
    opacity: 0;
  }

  &.exited {
    opacity: 0;
  }

  ${MEDIA_QUERIES.mdUp} {
    overflow-y: hidden;
  }
`;

export const CrossIconContainer = styled.div`
  position: absolute;
  top: ${SPACER.small};
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: ${COLORS.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  z-index: ${Z_SCALE.e2000};
  pointer-events: auto;

  ${MEDIA_QUERIES.mdUp} {
    top: 16px;
    right: 16px;
  }
`;

export const HeaderImageContainer = styled.div`
  height: 240px;
  max-height: 240px;
  width: 100%;

  img {
    height: 240px;
    max-height: 240px;
    width: 100%;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }

  ${MEDIA_QUERIES.mdUp} {
    height: 264px;
    max-height: 264px;

    img {
      height: 264px;
      max-height: 264px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
`;

export const ModalTitle = styled(Typography.Heading)`
  margin-bottom: ${SPACER.small};
`;

export const ModalBody = styled.div`
  p {
    margin-bottom: ${SPACER.large};

    &:last-child {
      margin-bottom: ${SPACER.xlarge};
    }

    & > a {
      text-transform: none;
    }
  }
`;

export const ModalFooter = styled.div`
  margin-bottom: 32px;
`;

const commonHeaderBarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_SCALE.modal + 1};
  width: 100%;
  background: ${COLORS.white};
  color: ${COLORS.primary};
  font-size: ${TYPOGRAPHY_CONSTANTS.fontSize.caption};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${COLORS.border};
  pointer-events: none;
`;

export const MobileHeaderBar = styled.div<{ showMobileHeaderBar: boolean }>`
  ${commonHeaderBarStyles};

  transition: opacity 350ms
    ${({ showMobileHeaderBar }): string =>
    showMobileHeaderBar ? 'ease-out' : 'ease-in'};
  opacity: ${({ showMobileHeaderBar }): number =>
    showMobileHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

export const DesktopHeaderBar = styled.div<{ showDesktopHeaderBar: boolean }>`
  ${commonHeaderBarStyles};

  top: 56px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: none;

  transition: opacity 350ms
    ${({ showDesktopHeaderBar }): string =>
    showDesktopHeaderBar ? 'ease-out' : 'ease-in'};
  opacity: ${({ showDesktopHeaderBar }): number =>
    showDesktopHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: flex;

    ${CrossIconContainer} {
      top: 8px;
      right: 12px;
    }
  }
`;

export const MobileTopOverlay = styled.div`
  width: 100%;
  background: transparent;
  height: 32px;

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto;
  transition: transform 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering {
    transform: translateY(100%);
  }

  &.entered {
    transform: translateY(0%);
  }

  &.exiting {
    transform: translateY(100%);
  }

  &.exited {
    transform: translateY(100%);
  }

  ${MEDIA_QUERIES.mdUp} {
    width: 616px;
  }
`;

// 112px comes from 56px margin top and bottom
export const MainModalContentContainer = styled.div`
  box-shadow: 0px -8px 24px rgba(51, 46, 84, 0.05);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: white;
  position: relative;

  ${MEDIA_QUERIES.mdUp} {
    box-shadow: 0px 8px 24px rgba(51, 46, 84, 0.05);
    border-radius: 8px;
    height: calc(100vh - 112px);
    margin-top: 56px;
    overflow-y: auto;
  }
`;

// 32px comes from top overlay
// 272px comes from 32px top overlay + 240px image
export const ContentWithFooterContainer = styled.div<{
  hasHeaderImage: boolean;
}>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100vh - 272px)' : 'calc(100vh - 32px)'};
  padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage
      ? SPACER.xlarge
      : `${SPACER.x4large}
    ${SPACER.large} 0 ${SPACER.large}`};

  ${MEDIA_QUERIES.mdUp} {
    min-height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100vh - 376px)' : 'calc(100vh - 112px)'};
    padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? '40px 56px 0' : '72px 56px 0'};
  
`;
