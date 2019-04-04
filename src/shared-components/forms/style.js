import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS } from '../../constants';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const baseInputStyles = css`
  appearance: none;
  border: 1px solid ${COLORS.border};
  border-radius: 0;
  color: ${COLORS.primary};
  font-size: 16px;
  padding: 13px 16px;
  transition: border-color 350ms;
  width: 100%;

  &::placeholder {
    color: ${COLORS.primaryTint3};
  }

  &:focus {
    outline-color: ${COLORS.border};
    outline-width: 1px;
  }
`;

export const inputStyles = showError => {
  const borderColor = showError ? COLORS.primary : COLORS.border;

  return css`
    ${baseInputStyles};
    border: 1px solid ${borderColor};
  `;
};

export const Textarea = styled.textarea`
  ${TYPOGRAPHY_STYLE.body};
  appearance: none;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  border-radius: 0;
  box-shadow: 0 1px 0 0 ${COLORS.tertiary};
  color: ${COLORS.primary};
  display: block;
  height: 100%;
  line-height: 1.5rem;
  margin: 0 auto;
  max-width: 35rem;
  padding: 16px;
  resize: none;
  transition: border-color 350ms;
  width: 100%;

  &::placeholder {
    color: ${COLORS.primaryTint3};
  }

  &:active,
  &:focus {
    outline: none;
  }

  &[disabled] {
    background-color: ${COLORS.disabled};
    color: ${COLORS.textDisabled};
    cursor: not-allowed;
  }
`;
