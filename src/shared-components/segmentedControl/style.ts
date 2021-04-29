import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { SPACER } from '../../constants';
import { TYPOGRAPHY_STYLE } from '../typography';

interface SegmentItemProps {
  active: boolean;
  key: number;
  onClick: () => void;
  width: number;
}

interface IndicatorProps {
  transform: string;
  width: number;
}

export const SegmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.COLORS.border};
  padding: ${SPACER.xsmall};
  border: 4px solid ${({ theme }) => theme.COLORS.border};
`;

export const SegmentItem = styled.button<SegmentItemProps>`
  ${buttonReset};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  border: none;
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)};
  color: ${({ theme }) => theme.COLORS.primaryTint2};
  border-radius: 80px;
  background-color: ${({ theme }) => theme.COLORS.border};
  width: ${({ width }) => `${width}%`};
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
  border-radius: 80px;
  width: ${({ width }) => `${width}%`};
  top: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)};
  color: ${({ theme }) => theme.COLORS.primary};
  font-weight: bold;
  transform: ${({ transform }) => transform};
  box-shadow: 0px 2px 4px rgba(51, 46, 84, 0.05);
  border: none;
  &:focus {
    box-shadow: ${({ theme }) => theme.BOX_SHADOWS.focusInner};
    outline: none;
  }
`;
