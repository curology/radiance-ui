import styled from '@emotion/styled';

import { SPACER, ThemeColors } from '../../constants';

const ParentContainer = styled.div`
  max-width: 327px;
`;

const CalloutContainer = styled.div<{ backgroundColor: ThemeColors }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${SPACER.medium};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div<{
  textColor: ThemeColors;
}>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSize.caption};
`;

const Icon = styled.div<{
  iconColor: ThemeColors;
}>`
  margin-left: ${SPACER.small};

  svg {
    fill: ${({ iconColor }) => iconColor};

    path {
      fill: ${({ iconColor }) => iconColor};
    }
  }
`;

export default {
  CalloutContainer,
  Icon,
  ParentContainer,
  Text,
};
