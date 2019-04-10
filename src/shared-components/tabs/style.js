import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACING, ANIMATION, MEDIA_QUERIES } from '../../constants';

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${SPACING.large} 0 0 0;
  position: relative;
  width: 100%;

  ${MEDIA_QUERIES.mdUp} {
    margin: ${SPACING.xlarge} 0 0 0;
    align-items: center;
    justify-content: center;
  }
`;

export const TabItem = styled.div`
  ${TYPOGRAPHY_STYLE.button};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  padding: ${SPACING.small} ${SPACING.base};
  transition: ${ANIMATION.defaultTiming};

  color: ${({ active }) => (active ? COLORS.primary : COLORS.primaryTint3)};

  &:hover {
    color: ${COLORS.primary};
    transition: ${ANIMATION.defaultTiming};
  }
`;
