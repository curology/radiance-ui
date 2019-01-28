import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { ANIMATION, COLORS } from '../../../../constants';
import { ButtonBase } from '../../style';

const multiStyles = `
  justify-content: space-between;
  max-width: 120px;
  margin: 0 auto;
`;

export const RoundButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  ${({ multi }) => multi && multiStyles};
`;

export const RoundButtonWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ loading, disabled }) =>
    (loading || disabled) &&
    css`
      cursor: not-allowed;
    `};
`;

export const RoundButtonBase = styled(ButtonBase)`
  border-radius: 50%;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  height: 48px;
  width: 48px;
  padding: 0;

  ${({ loading, disabled }) =>
    !loading &&
    !disabled &&
    css`
      &:hover {
        transition: all ${ANIMATION.defaultTiming} ease-in-out;
        opacity: 1;
      }
    `};

  & > svg {
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    transition: opacity ${ANIMATION.defaultTiming};
    margin: 0 auto;
  }
`;

export const roundButtonLoader = disabled => css`
  width: 36px;
  margin-top: -3px;
  ${disabled && `
    & span {
      background-color: ${COLORS.white};
    }
  `};
`;

export const RoundButtonText = styled.p`
  margin: 10px 0;
`;

