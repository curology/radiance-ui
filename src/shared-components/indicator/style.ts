import styled from '@emotion/styled';

import { TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, ThemeColors } from '../../constants';
import { applyPrimaryThemeVerticalOffset } from '../../utils/themeStyles';

interface IndicatorContainerProps {
  backgroundColor: ThemeColors;
  textColor: ThemeColors;
}

const IndicatorContainer = styled.div<IndicatorContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
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
    ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}
    font-weight: ${({ theme }) => theme.TYPOGRAPHY.fontWeight.bold};
    color: ${({ textColor }) => textColor};
    ${({ theme }) => applyPrimaryThemeVerticalOffset(theme)};
  }
`;

export default { IndicatorContainer };
