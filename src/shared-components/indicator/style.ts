import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

export const IndicatorContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.error};
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
  border-radius: 8px;

  > div {
    position: relative;
    top: 1px;
    ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}
    font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
    color: ${({ theme }) => theme.COLORS.white};
  }
`;
