import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, BOX_SHADOWS, SPACING, ANIMATION } from '../../constants';

export const HelperList = styled.ul`
  list-style-type: none;
  margin: ${SPACING.xsmall} 0;
  min-height: 23px;
`;

export const ErrorItem = styled.li`
  ${TYPOGRAPHY_STYLE.error};
`;

export const HintItem = styled.li`
  ${TYPOGRAPHY_STYLE.caption};
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

  ~ ul ${HintItem} {
    transition: opacity ${ANIMATION.defaultTiming};
    max-height: 0 !important;
    opacity: 0 !important;
  }

  &:active,
  &:focus {
    outline: none;
    border-color: ${COLORS.primary};
    box-shadow: ${BOX_SHADOWS.focusSecondary};

    ~ ul ${HintItem} {
      max-height: 50px !important;
      opacity: 1 !important;
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
  svg {
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

  svg {
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
