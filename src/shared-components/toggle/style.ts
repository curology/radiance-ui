import styled from 'src/utils/theming/styled';

import { BOX_SHADOWS, COLORS, SPACER } from '../../constants';

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
  color: ${COLORS.primaryTint1};
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

export const thumbStyle = {
  height: 22,
  width: 22,
  border: `1px solid ${COLORS.border}`,
  boxShadow: `none`,
  background: COLORS.white,
  backgroundColor: COLORS.white,
};

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
