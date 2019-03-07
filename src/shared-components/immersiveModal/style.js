import styled from '@emotion/styled';

import Typography from '../typography';
import {
  ANIMATION,
  BREAKPOINTS,
  COLORS,
  MEDIA_QUERIES,
  SPACING,
  Z_SCALE,
} from '../../constants';

export const Overlay = styled.div`
  background-color: ${COLORS.overlay};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
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
    max-width: ${({maxWidth}) => (maxWidth === 'medium' ? `${BREAKPOINTS.md}px` : `${BREAKPOINTS.sm}px`)};
    margin-bottom: ${SPACING.base};
    margin-top: ${SPACING.base};
  }
`;

export const CloseIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: ${SPACING.small};
  top: ${SPACING.small};
  transform: scale(1, 1);
  transition: all ${ANIMATION.defaultTiming};
  z-index: 2000;
  padding: ${SPACING.small};
  background-color: ${COLORS.white};
  border-radius: 50%;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const CopyContainer = styled.div`
  padding: ${SPACING.medium} ${SPACING.base};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACING.large} ${SPACING.medium};
  }
`;

export const Title = styled(Typography.Title)`
  margin-bottom: ${SPACING.small};
  text-align: left;
`;

export const Body = styled.div`
  color: ${COLORS.purple80};
  text-align: left;

  &:not(:last-child) {
    margin-bottom: ${SPACING.base};
  }

  p > a {
    text-transform: none;
  }
`;

export const Footer = styled.div`
  margin-bottom: ${SPACING.xsmall};
`;
