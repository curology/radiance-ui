import styled from '@emotion/styled';

import { Typography } from '../../typography';
import { MEDIA_QUERIES, SPACER, Z_SCALE, ANIMATION } from '../../../constants';
import SharedStyles from '../style';

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

const ModalFooter = styled.div`
  margin-bottom: ${SPACER.xlarge};
`;

const DesktopHeaderBar = styled.div<{ showDesktopHeaderBar: boolean }>`
  ${({ theme }) => SharedStyles.commonHeaderBarStyles(theme)}

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
  DesktopHeaderBar,
  HeaderImageContainer,
  MainModalContentContainer,
  ModalFooter,
  ModalTitle,
};
