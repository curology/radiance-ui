import styled from '@emotion/styled';

import Typography from '../typography';
import {
  BREAKPOINTS,
  COLORS,
  MEDIA_QUERIES,
  SPACER,
  Z_SCALE,
} from '../../constants';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.overlay};
  z-index: ${Z_SCALE.modal};
  overflow-y: auto;
`;

export const ModalContainer = styled.div`
  background-color: ${COLORS.white};
  height: 100vh;
  margin: 0 auto;
  max-width: ${BREAKPOINTS.sm}px;
  overflow-y: auto;
  position: relative;
  width: 100%;

  ${MEDIA_QUERIES.mdUp} {
    height: auto;
    max-width: 616px;
    margin-bottom: ${SPACER.large};
    margin-top: ${SPACER.large};
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  right: ${SPACER.medium};
  top: ${SPACER.medium};
  z-index: ${Z_SCALE.e2000};
`;

export const CopyContainer = styled.div`
  padding: ${SPACER.xlarge} ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACER.x2large} ${SPACER.xlarge};
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: ${SPACER.medium};
  text-align: left;
`;

export const Body = styled.div`
  color: ${COLORS.purple85};
  text-align: left;

  &:not(:last-child) {
    margin-bottom: ${SPACER.large};
  }

  p > a {
    text-transform: none;
  }
`;

export const Footer = styled.div`
  margin-bottom: ${SPACER.small};
`;
