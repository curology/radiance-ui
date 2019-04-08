import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { COLORS, BOX_SHADOWS, SPACING, ANIMATION } from '../../constants';

export const ErrorItem = styled.div`
  ${TYPOGRAPHY_STYLE.error};
`;

export const HintItem = styled.div`
  ${TYPOGRAPHY_STYLE.caption};
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.small};
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
    opacity: 0;
  }

  &:active,
  &:focus {
    outline: none;
    border-color: ${COLORS.primary};
    box-shadow: ${BOX_SHADOWS.focusSecondary};

    ~ ul ${HintItem} {
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
  position: relative;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    margin-top: 20px;
    right: 16px;
    fill: ${COLORS.statusRed};
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
  svg {
    display: none;
  }

  ${({ showError }) => showError && errorStyles};
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 8px 0;
  /* min-height: 23px; */
`;

export const CenteredList = styled(List)`
  text-align: center;
`;

export const transitionStyles = css`
  .expand-enter {
    opacity: 0;
    max-height: 0;
  }

  .expand-enter.expand-enter-active {
    opacity: 1;
    max-height: 50px;
    transition-duration: ${ANIMATION.defaultTiming};
    transition-property: max-height, opacity;
    transition-timing-function: ease-in;
  }

  .expand-exit {
    opacity: 1;
    max-height: 50px;
  }

  .expand-exit.expand-exit-active {
    opacity: 0;
    max-height: 0;
    transition-duration: ${ANIMATION.defaultTiming};
    transition-property: max-height, opacity;
    transition-timing-function: ease-in;
  }
`;
