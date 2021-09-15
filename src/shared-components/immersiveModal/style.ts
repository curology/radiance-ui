import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { Typography } from '../typography';
import {
  MEDIA_QUERIES,
  SPACER,
  Z_SCALE,
  ANIMATION,
  ThemeType,
} from '../../constants';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.overlay};
  transition: opacity ${ANIMATION.defaultTiming}
    cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entering,
  &.exiting,
  &.exited {
    opacity: 0;
  }

  &.entered {
    opacity: 1;
  }

  ${MEDIA_QUERIES.mdUp} {
    overflow-y: hidden;
  }
`;

const CrossIconContainer = styled.button`
  ${buttonReset}
  padding: 0;
  position: absolute;
  top: 8px;
  right: 12px;
  z-index: ${Z_SCALE.e2000};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.COLORS.white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;

  ${MEDIA_QUERIES.mdUp} {
    top: 64px;
    right: 16px;
    position: fixed;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
  }
`;

const HeaderImageContainer = styled.div`
  min-height: 240px;
  max-height: 240px;
  width: 100%;

  img {
    min-height: 240px;
    max-height: 240px;
    width: 100%;
    border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
    border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  }

  ${MEDIA_QUERIES.mdUp} {
    min-height: 264px;
    max-height: 264px;

    img {
      height: 264px;
      max-height: 264px;
      border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
      border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
    }
  }
`;

const ModalTitle = styled(Typography.Heading)`
  margin-bottom: ${SPACER.small};
`;

const Paragraph = styled.p`
  margin-bottom: ${SPACER.large};

  &:last-of-type {
    margin-bottom: ${SPACER.xlarge};
  }
`;

const ModalFooter = styled.div`
  margin-bottom: ${SPACER.xlarge};
`;

const commonHeaderBarStyles = (theme: ThemeType) => `
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_SCALE.modal + 1};
  width: 100%;
  background: ${theme.COLORS.white};
  color: ${theme.COLORS.primary};
  font-size: ${theme.TYPOGRAPHY.fontSize.caption};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${theme.COLORS.border};
  pointer-events: none;
`;

const MobileHeaderBar = styled.div<{ showMobileHeaderBar: boolean }>`
  ${({ theme }) => commonHeaderBarStyles(theme)}

  transition: opacity ${ANIMATION.defaultTiming}
    ${({ showMobileHeaderBar }): string =>
    showMobileHeaderBar ? 'ease-out' : 'ease-in'};
  opacity: ${({ showMobileHeaderBar }): number =>
    showMobileHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

const DesktopHeaderBar = styled.div<{ showDesktopHeaderBar: boolean }>`
  ${({ theme }) => commonHeaderBarStyles(theme)}

  top: 56px;
  border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
  border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
  display: none;
  z-index: ${Z_SCALE.e2};

  transition: opacity ${ANIMATION.defaultTiming}
    ${({ showDesktopHeaderBar }): string =>
      showDesktopHeaderBar ? 'ease-out' : 'ease-in'};

  opacity: ${({ showDesktopHeaderBar }): number =>
    showDesktopHeaderBar ? 1 : 0};

  ${MEDIA_QUERIES.mdUp} {
    display: flex;

    ${CrossIconContainer} {
      top: 8px;
    }
  }
`;

const MobileTopOverlay = styled.div`
  width: 100%;
  background: transparent;
  height: 32px;

  ${MEDIA_QUERIES.mdUp} {
    display: none;
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  transition: transform ${ANIMATION.defaultTiming}
    cubic-bezier(0.075, 0.82, 0.165, 1);

  &.entered {
    transform: translateY(0%);
  }

  &.entering,
  &.exiting,
  &.exited {
    transform: translateY(100%);
  }

  & > div.modal-offclick-wrapper {
    height: 100%;
  }

  ${MEDIA_QUERIES.mdUp} {
    width: 616px;

    & > div.modal-offclick-wrapper {
      height: calc(100% - 112px);
    }
  }
`;

export interface HasHeaderImageProps {
  hasHeaderImage: boolean;
}

// 32px comes from top overlay
// 272px comes from 32px top overlay + 240px image
const MainModalContentContainer = styled.div<HasHeaderImageProps>`
  position: relative;
  border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.modal};
  background: ${({ theme }) => theme.COLORS.white};
  height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100% - 272px)' : 'calc(100% - 32px)'};

  ${MEDIA_QUERIES.mdUp} {
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
    margin-top: 56px;
    overflow-y: auto;
    height: 100%;
  }
`;

const ContentWithFooterContainer = styled.div<HasHeaderImageProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100%;
  border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  background: ${({ theme }) => theme.COLORS.white};
  padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage
      ? `${SPACER.xlarge} ${SPACER.large} 0`
      : `${SPACER.x4large} ${SPACER.large} 0`};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${({ hasHeaderImage }): string =>
      hasHeaderImage
        ? `${SPACER.x2large} ${SPACER.x4large} 0`
        : `72px ${SPACER.x2large} 0`};
    min-height: ${({ hasHeaderImage }): string =>
      hasHeaderImage ? 'calc(100% - 264px)' : '100%'};
  }
`;

export default {
  ContentWithFooterContainer,
  CrossIconContainer,
  Overlay,
  DesktopHeaderBar,
  HeaderImageContainer,
  MainModalContentContainer,
  MobileHeaderBar,
  MobileTopOverlay,
  ModalContainer,
  ModalFooter,
  ModalTitle,
  Paragraph,
};
