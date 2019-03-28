import styled from '@emotion/styled';

import { COLORS } from '../../../../constants';

/* eslint-disable-next-line import/prefer-default-export */
export const BaseTextButton = styled.button`
  border-color: transparent;
  background-color: transparent;

  color: ${({ disabled }) => `${disabled ? COLORS.textDisabled : COLORS.primary}` };
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };

  &:hover {
    opacity: 0.8;
    background-color: transparent;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;
