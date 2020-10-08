import styled from '@emotion/styled';
import { buttonReset } from 'src/utils/styles/buttonReset';

import { COLORS, SPACER, BOX_SHADOWS } from '../../constants';
import { style as TYPOGRAPHY_STYLE } from '../typography';

type SegmentItemProps = {
  active: boolean;
  key: number;
  onClick: () => void;
  width: number;
};

type IndicatorProps = {
  width: number;
  transform: string;
};

export const SegmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 80px;
  background-color: ${COLORS.purple10};
  padding: ${SPACER.xsmall};
  border: 4px solid ${COLORS.purple10};
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
  ${TYPOGRAPHY_STYLE.caption};
  color: ${COLORS.purple70};
  border-radius: 80px;
  background-color: ${COLORS.purple10};
  width: ${({ width }) => `${width}%`};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${COLORS.primary};
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
  ${TYPOGRAPHY_STYLE.caption};
  color: ${COLORS.primary};
  font-weight: bold;
  transform: ${({ transform }) => transform};
  box-shadow: 0px 2px 4px rgba(51, 46, 84, 0.05);
  border: none;
  &:focus {
    box-shadow: ${BOX_SHADOWS.focusInner};
    outline: none;
  }
`;
