import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, ANIMATION, MEDIA_QUERIES } from '../../constants';

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

export const TabItem = styled.button<{ active: boolean }>`
  ${buttonReset}
  ${({ theme }) => TYPOGRAPHY_STYLE.button(theme)}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  padding: ${SPACER.medium} ${SPACER.large};
  transition: ${ANIMATION.defaultTiming};
  border-radius: ${SPACER.xsmall};

  color: ${({ active, theme }) =>
    active ? theme.COLORS.primary : theme.COLORS.textDisabled};

  &:hover {
    color: ${({ theme }) => theme.COLORS.primary};
    transition: ${ANIMATION.defaultTiming};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focus};
  }
`;
