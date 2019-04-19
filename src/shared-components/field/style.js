import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, BOX_SHADOWS, SPACING, ANIMATION } from '../../constants';

export const HintItem = styled.div`
  ${TYPOGRAPHY_STYLE.caption};
  margin: 0;
  transition: all ${ANIMATION.defaultTiming};
  opacity: 0;
  max-height: 0;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.small};
`;

export const Label = styled.label`
  ${TYPOGRAPHY_STYLE.label};

  ${({ disabled }) => disabled && `color:${COLORS.purple30};`};
`;

const inputStyles = css`
  ${TYPOGRAPHY_STYLE.body};
  appearance: none;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  border-radius: 0;
  color: ${COLORS.primaryTint1};
  padding: 13px ${SPACING.small};
  transition: border-color ${ANIMATION.defaultTiming};
  width: 100%;
  outline: none;
  margin-bottom: ${SPACING.xsmall};

  &:active,
  &:focus {
    outline: none;
    border-color: ${COLORS.primary};
    box-shadow: ${BOX_SHADOWS.focusSecondary};

    ~ ${HintItem} {
      max-height: 23px;
      opacity: 1;
    }
  }

  &::placeholder {
    color: ${COLORS.primaryTint3};
  }

  &[disabled] {
    background-color: ${COLORS.disabled};
    color: ${COLORS.textDisabled};
    cursor: not-allowed;
    border: 1px solid ${COLORS.border};
    box-shadow: none;
  }
`;

export const Input = styled.input`
  ${inputStyles};
  padding-right: ${SPACING.medium};
`;

export const Textarea = styled.textarea`
  ${inputStyles};
  color: ${COLORS.primary};
  display: block;
  height: 100%;
  line-height: ${SPACING.base};
  margin: 0 auto;
  max-width: 35rem;
  padding: ${SPACING.small};
  resize: none;
  transition: border-color ${ANIMATION.defaultTiming};
  width: 100%;
`;

const errorStyles = css`
  svg.error-icon {
    opacity: 1;
  }

  ${Textarea}, ${Input} {
    border-color: ${COLORS.statusRed};

    &:active,
    &:focus {
      border-color: ${COLORS.statusRed};
      box-shadow: none;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;

  svg.error-icon {
    opacity: 0;
    position: absolute;
    top: 20px;
    right: ${SPACING.small};
    width: 16px;
    height: 16px;
    fill: ${COLORS.statusRed};
    transition: opacity ${ANIMATION.defaultTiming};
  }

  ${({ showErrors }) => showErrors && errorStyles};
`;
