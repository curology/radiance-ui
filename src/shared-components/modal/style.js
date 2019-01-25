import styled from '@emotion/styled';

import Typography from '../typography';
import { COLORS, MEDIA_QUERIES, SPACING } from '../../constants';

export const ModalContainer = styled.div`
  .ReactModalPortal {
    position: relative;
    z-index: 99999999;
  }
`;

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
  padding: ${SPACING.medium};

  ${MEDIA_QUERIES.lgUp} {
    padding: ${SPACING.xxlarge};
  }
`;

const determineScale = ({ isVisible }) => (
  isVisible ? 'scale(1, 1)' : 'scale(0.95, 0.95)'
);

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
  cursor: pointer;
  opacity: 0.75;
  position: absolute;
  right: ${SPACING.small};
  top: ${SPACING.small};
  transform: scale(1, 1);
  transition: all 350ms;
  z-index: 2000;

  &:hover {
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
`;

export const ContentContainer = styled.div`
  max-width: 600px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${SPACING.medium} ${SPACING.large};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${({ tight }) =>
    tight ? SPACING.large : `${SPACING.xlarge} 5rem`};
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: ${SPACING.base};

  ${MEDIA_QUERIES.mdUp} {
    margin-bottom: ${SPACING.large};
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
  padding-top: ${SPACING.base};

  ${MEDIA_QUERIES.mdUp} {
    padding-top: ${SPACING.large};
  }

  ${({ align }) =>
    !!align &&
    `
      display: flex;
      flex-direction: row;
      justify-content: ${align};
    `};
`;
