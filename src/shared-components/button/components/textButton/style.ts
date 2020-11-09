import styled from '@emotion/styled';

import { BOX_SHADOWS, SPACER } from '../../../../constants';

export const BaseTextButton = styled.button<{ disabled: boolean }>`
  border-color: transparent;
  background-color: transparent;
  border-radius: ${SPACER.xsmall};

  color: ${({ disabled, theme }) =>
    `${disabled ? theme.COLORS.textDisabled : theme.COLORS.primary}`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: ${BOX_SHADOWS.focus};
  }
`;
