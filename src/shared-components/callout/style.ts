import styled from '@emotion/styled';

import { BORDER_RADIUS, SPACER } from '../../constants';

const ParentContainer = styled.div`
  max-width: 327px;
`;

const CalloutContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.infoLight};
  padding: ${SPACER.medium};
  border-radius: ${BORDER_RADIUS.medium};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div<{
  textColor: string;
}>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSize.caption};
`;

const Icon = styled.div<{
  iconColor: string;
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
