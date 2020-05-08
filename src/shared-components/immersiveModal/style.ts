import styled from '@emotion/styled';

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
`;

export const ModalContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto;
  width: 100%;
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
`;

export const ContentWithFooterContainer = styled.div<{
  hasHeaderImage: boolean;
}>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? 'calc(100% - 240px)' : 'calc(100vh - 32px)'};
  padding: ${({ hasHeaderImage }): string =>
    hasHeaderImage ? SPACER.xlarge : SPACER.x4large}
    ${SPACER.large} 0 ${SPACER.large};
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

export const MobileHeaderBar = styled.div<{ showMobileHeaderBar: boolean }>`
  position: fixed;
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
  transition: opacity 350ms
    ${({ showMobileHeaderBar }): string =>
    showMobileHeaderBar ? 'ease-out' : 'ease-in'};
  opacity: ${({ showMobileHeaderBar }): number =>
    showMobileHeaderBar ? 1 : 0};
  pointer-events: none;
`;

export const MobileTopOverlay = styled.div`
  width: 100%;
  background: transparent;
  height: 32px;
`;

export const MainModalContentContainer = styled.div`
  box-shadow: 0px -8px 24px rgba(51, 46, 84, 0.05);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background: white;
  position: relative;
  min-height: calc(100% - 32px);
`;
