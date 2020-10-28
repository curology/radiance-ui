import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import {
 COLORS, BOX_SHADOWS, SPACER, ANIMATION, 
} from '../../constants';
import { MessagesTypes } from '../verificationMessages';

export const HintItem = styled.div`
  ${TYPOGRAPHY_STYLE.caption};
  transition: all ${ANIMATION.defaultTiming} ease-in-out;
  opacity: 0;
  max-height: 0;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`;

export const Label = styled.label<{ disabled: boolean }>`
  ${TYPOGRAPHY_STYLE.label};

  ${({ disabled }) => disabled && `color:${COLORS.primaryTint3};`};
`;

const inputStyles = css`
  ${TYPOGRAPHY_STYLE.body};
  appearance: none;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  border-radius: ${SPACER.xsmall};
  color: ${COLORS.primaryTint1};
  transition: border-color ${ANIMATION.defaultTiming};
  width: 100%;
  outline: none;
  margin-bottom: 2px;

  &:active,
  &:focus {
    outline: none;
    border-color: ${COLORS.primary};
    box-shadow: ${BOX_SHADOWS.focus};

    ~ ${HintItem} {
      max-height: 24px;
      opacity: 1;
      margin: ${SPACER.x2small} 0 0 0;
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
  padding: 13px ${SPACER.xlarge} 13px ${SPACER.medium};
`;

export const Textarea = styled.textarea`
  ${inputStyles};
  color: ${COLORS.primary};
  display: block;
  height: 100%;
  line-height: ${SPACER.large};
  margin: 0 auto;
  max-width: 35rem;
  padding: ${SPACER.medium};
  resize: none;
  transition: border-color ${ANIMATION.defaultTiming};
  width: 100%;
`;

const applyMessagesStyles = (messagesType: MessagesTypes) => css`
  svg.radiance-field-input-icon {
    opacity: 1;
  }

  ${Textarea}, ${Input} {
    border-color: ${messagesType === 'success' ? COLORS.success : COLORS.error};

    &:active,
    &:focus {
      border-color: ${messagesType === 'success'
        ? COLORS.success
        : COLORS.error};
      box-shadow: ${BOX_SHADOWS.focus};
    }
  }
`;

export const InputContainer = styled.div<{
  messagesType: MessagesTypes;
  showMessages: boolean;
}>`
  position: relative;

  svg.radiance-field-input-icon {
    opacity: 0;
    position: absolute;
    top: 20px;
    right: ${SPACER.medium};
    transition: opacity ${ANIMATION.defaultTiming};
  }

  ${({ showMessages, messagesType }) =>
    showMessages && applyMessagesStyles(messagesType)};
`;
