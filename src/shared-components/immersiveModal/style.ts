import styled from '@emotion/styled';

import { buttonReset } from '../../utils/styles/buttonReset';
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

const CrossIconButton = styled.button<{ showDesktopHeaderBar?: boolean }>`
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
    top: ${({ showDesktopHeaderBar }) =>
      showDesktopHeaderBar === true ? SPACER.x5large : '4.5rem'};
    right: 16px;
    position: fixed;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
  }
`;

const Paragraph = styled.p`
  margin-bottom: ${SPACER.large};

  &:last-of-type {
    margin-bottom: ${SPACER.xlarge};
  }
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

export default {
  commonHeaderBarStyles,
  CrossIconButton,
  Overlay,
  MobileHeaderBar,
  MobileTopOverlay,
  ModalContainer,
  Paragraph,
};
