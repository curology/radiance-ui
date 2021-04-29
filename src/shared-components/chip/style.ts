import styled from '@emotion/styled';

import { TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, ThemeColors } from '../../constants';
import { applyPrimaryThemeVerticalOffset } from '../../utils/themeStyles';

const ChipText = styled.span`
  ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}
  font-weight: ${({ theme }) => theme.TYPOGRAPHY.fontWeight.bold};
  ${({ theme }) => applyPrimaryThemeVerticalOffset(theme)};
`;

interface ChipStylesProps {
  backgroundColor: ThemeColors;
  textColor: ThemeColors;
}

const ChipStyles = styled.div<ChipStylesProps>`
  align-items: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.small};
  display: inline-flex;
  height: ${SPACER.large};
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 0 ${SPACER.small};
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${ChipText} {
    color: ${({ textColor }) => textColor};
  }
`;

export default { ChipStyles, ChipText };
