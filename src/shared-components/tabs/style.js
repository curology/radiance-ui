import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACER, ANIMATION, MEDIA_QUERIES } from '../../constants';

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: ${SPACER.x2large} 0 0 0;
  position: relative;
  width: 100%;

  ${MEDIA_QUERIES.mdUp} {
    margin: ${SPACER.x4large} 0 0 0;
    align-items: center;
    justify-content: center;
  }
`;

export const TabItem = styled.button`
  ${buttonReset}
  ${TYPOGRAPHY_STYLE.button};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  padding: ${SPACER.medium} ${SPACER.large};
  transition: ${ANIMATION.defaultTiming};

  color: ${({ active }) => (active ? COLORS.primary : COLORS.primaryTint3)};

  &:hover {
    color: ${COLORS.primary};
    transition: ${ANIMATION.defaultTiming};
  }
`;
