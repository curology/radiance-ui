import styled from '@emotion/styled';

import Typography from '../typography';
import { COLORS, MEDIA_QUERIES, SPACER, Z_SCALE } from '../../constants';

export const ModalOverlay = styled.div`
  -webkit-overflow-scrolling: touch;
  background-color: ${COLORS.overlay};
  bottom: 0;
  cursor: ${({ canBeClosed }) => (canBeClosed ? 'pointer' : 'auto')};
  left: 0;
  overflow-x: ${({ isVisible }) => (isVisible ? 'hidden' : 'auto')};
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  padding: ${SPACER.large};

  ${MEDIA_QUERIES.lgUp} {
    padding: ${SPACER.x5large};
  }
`;

const determineScale = ({ isVisible }) =>
  isVisible ? 'scale(1, 1)' : 'scale(0.95, 0.95)';

export const ModalBox = styled.div`
  background-color: ${COLORS.white};
  cursor: auto;
  display: inline-block;
  left: 50%;
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  text-align: center;
  transform: translateX(-50%) ${determineScale};
`;

export const ModalCloseIcon = styled.div`
  position: absolute;
  right: ${SPACER.medium};
  top: ${SPACER.medium};
  z-index: ${Z_SCALE.e2000};
`;

export const ContentContainer = styled.div`
  max-width: 600px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${SPACER.xlarge} ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${({ tight }) =>
      tight ? SPACER.x2large : `${SPACER.x4large} 5rem`};
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
    margin-bottom: ${SPACER.x2large};
  }
`;

export const Body = styled.div`
  color: ${COLORS.primary};
  text-align: ${({ align }) => align || 'left'};

  p > a {
    text-transform: none;
  }
`;

export const Footer = styled.div`
  padding-top: ${SPACER.large};

  ${MEDIA_QUERIES.mdUp} {
    padding-top: ${SPACER.x2large};
  }

  ${({ align }) =>
    !!align &&
    `
      display: flex;
      flex-direction: row;
      justify-content: ${align};
    `};
`;
