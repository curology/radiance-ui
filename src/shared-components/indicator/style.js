import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, SPACER, TYPOGRAPHY_CONSTANTS } from '../../constants';

export const IndicatorContainer = styled.div`
  background-color: ${COLORS.error};
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
    ${TYPOGRAPHY_STYLE.label};
    font-weight: ${TYPOGRAPHY_CONSTANTS.fontWeight.bold};
    color: ${COLORS.white};
  }
`;
