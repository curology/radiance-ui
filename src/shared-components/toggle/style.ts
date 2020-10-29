import styled from '@emotion/styled';
import { ThemeType } from 'src/constants/themes/types';

import { BOX_SHADOWS, SPACER } from '../../constants';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${SPACER.medium} 0;

  & > input {
    display: none;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.COLORS.primaryTint1};
  margin: 0;
  font-size: ${SPACER.medium};
  line-height: ${SPACER.large};
  text-align: left;
  cursor: pointer;
  user-select: none;
  margin-right: ${SPACER.small};
`;

export const trackStyle = {
  borderRadius: 100,
  height: 24,
  width: 40,
};

export const thumbStyle = (theme: ThemeType) => ({
  height: 22,
  width: 22,
  border: `1px solid ${theme.COLORS.border}`,
  boxShadow: `none`,
  background: theme.COLORS.white,
  backgroundColor: theme.COLORS.white,
});

export const ReactToggleButtonContainer = styled.div`
  > div:first-of-type {
    > input {
      &:focus {
        box-shadow: ${BOX_SHADOWS.focus};
        outline: none;
        border-radius: 12px;
      }
    }
  }
`;
