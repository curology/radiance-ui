import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, ThemeColors } from '../../constants';
import { applyVerticalAlignmentOffset } from '../../utils/themeStyles';

export const IndicatorContainer = styled.div<{ backgroundColor: ThemeColors }>`
  background-color: ${(props) => props.backgroundColor};
  min-height: 16px;
  height: 16px;
  max-height: 16px;
  text-align: center;
  padding: 0 ${SPACER.xsmall};
  min-width: 16px;
  width: fit-content;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  > div {
    position: relative;
    top: 1px;
    ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}
    font-weight: ${({ theme }) => theme.TYPOGRAPHY.fontWeight.bold};
    color: ${({ theme }) => theme.COLORS.white};
    ${({ theme }) => applyVerticalAlignmentOffset(theme)};
  }
`;
