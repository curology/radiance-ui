import styled from '@emotion/styled';

import { SPACER, ThemeColors } from '../../constants';

const ParentContainer = styled.div`
  max-width: 327px;
`;

const CalloutContainer = styled.div<{
  backgroundColor: ThemeColors;
  displayCloseIcon: boolean;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${SPACER.medium};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.medium};
  display: ${({ displayCloseIcon }) => (displayCloseIcon ? 'block' : 'flex')};
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

const CrossIconContainer = styled.button`
  align-items: center;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  float: right;
  height: 40px;
  justify-content: center;
  margin: -12px -12px 0 0;
  pointer-events: auto;
  width: 40px;

  &:focus {
    border: #332e54 solid 2px;
    outline: none;
  }
`;

export default {
  CalloutContainer,
  CrossIconContainer,
  Icon,
  ParentContainer,
  Text,
};
