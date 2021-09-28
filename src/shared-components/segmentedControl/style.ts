import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { SPACER } from '../../constants';
import { TYPOGRAPHY_STYLE } from '../typography';

interface SegmentItemProps {
  active: boolean;
  onClick: () => void;
  segmentWidth: number;
}

interface IndicatorProps {
  segmentWidth: number;
  transform: string;
}

export const SegmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  background-color: ${({ theme }) => theme.COLORS.border};
  padding: ${SPACER.xsmall} 0;
`;

export const SegmentItem = styled.button<SegmentItemProps>`
  ${buttonReset};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 ${SPACER.x2small};
  top: 0;
  left: 0;
  bottom: 0;
  padding: ${SPACER.xsmall};
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)};
  color: ${({ theme }) => theme.COLORS.primaryTint2};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  background-color: ${({ theme }) => theme.COLORS.border};
  width: ${({ segmentWidth }) => `${segmentWidth}%;`};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.COLORS.primary};
    z-index: 3;
  }
`;

export const Indicator = styled.button<IndicatorProps>`
  ${buttonReset};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0;
  position: absolute;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.large};
  width: ${({ segmentWidth }) => `${segmentWidth}%`};
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)};
  color: ${({ theme }) => theme.COLORS.primary};
  font-weight: bold;
  transform: ${({ transform }) => transform};
  border: 4px solid ${({ theme }) => theme.COLORS.border};

  &:focus {
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focusInner};
    outline: none;
  }
`;
