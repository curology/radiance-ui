import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER, ANIMATION, ThemeType } from '../../constants';
import { MessagesTypes } from '../verificationMessages';

export const HintItem = styled.div`
  ${({ theme }) => TYPOGRAPHY_STYLE.caption(theme)}
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
  ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}

  ${({ disabled, theme }) =>
    disabled ? `color: ${theme.COLORS.primaryTint3};` : ''}
`;

const inputStyles = (theme: ThemeType) => css`
  ${TYPOGRAPHY_STYLE.body(theme)}
  appearance: none;
  background: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.border};
  border-radius: ${theme.BORDER_RADIUS.small};
  color: ${theme.COLORS.primaryTint1};
  transition: border-color ${ANIMATION.defaultTiming};
  width: 100%;
  outline: none;
  margin-bottom: 2px;

  &:active,
  &:focus {
    outline: none;
    border-color: ${theme.COLORS.primary};
    box-shadow: ${theme.BOX_SHADOWS.focus};

    ~ ${HintItem} {
      max-height: 24px;
      opacity: 1;
      margin: ${SPACER.x2small} 0 0 0;
    }
  }

  &::placeholder {
    color: ${theme.COLORS.textDisabled};
  }

  &[disabled] {
    background-color: ${theme.COLORS.defaultLight};
    color: ${theme.COLORS.textDisabled};
    cursor: not-allowed;
    border: 1px solid ${theme.COLORS.border};
    box-shadow: none;
  }
`;

export const Input = styled.input`
  ${({ theme }) => inputStyles(theme)}
  padding: 13px ${SPACER.xlarge} 13px ${SPACER.medium};
`;

export const Textarea = styled.textarea`
  ${({ theme }) => inputStyles(theme)}
  color: ${({ theme }) => theme.COLORS.primary};
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

const applyMessagesStyles = (messagesType: MessagesTypes, theme: ThemeType) => `
  svg.radiance-field-input-icon {
    opacity: 1;
  }

  ${Textarea}, ${Input} {
    border-color: ${
      messagesType === 'success' ? theme.COLORS.success : theme.COLORS.error
    };

    &:active,
    &:focus {
      border-color: ${
        messagesType === 'success' ? theme.COLORS.success : theme.COLORS.error
      };
      box-shadow: ${theme.BOX_SHADOWS.focus};
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

  ${({ showMessages, messagesType, theme }) =>
    showMessages && applyMessagesStyles(messagesType, theme)}
`;
