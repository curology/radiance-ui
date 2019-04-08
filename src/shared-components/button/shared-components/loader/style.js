import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

import { COLORS } from '../../../../constants';

const statefulLoader = keyframes`
  0% { opacity: 1; transform: translate3d(0, 0, 0) scale(1, 1); }
  20% { opacity: .95; transform: translate3d(12px, 0, 0) scale(1, 1); }
  35% { opacity: 0; transform: translate3d(16px, 0, 0) scale(.85, .85); }
  100% { opacity: 0; transform: translate3d(16px, 0, 0); }
`;

const primaryLoadingStyles = css`
  background-color: ${COLORS.white};
`;

const accentLoadingStyles = css`
  background-color: ${COLORS.purple};
`;

const quaternaryLoadingStyles = css`
  background-color: ${COLORS.purple70};
`;

const ButtonLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  margin-top: -6px;
  width: 38px;
  opacity: ${({ loading }) => (loading ? 1 : 0)};

  & span {
    ${({ disabled, buttonType }) => {
      if (disabled) {
        return '';
      }

      switch (buttonType) {
        case 'secondary':
          return accentLoadingStyles;
        case 'tertiary':
          return accentLoadingStyles;
        case 'quaternary':
          return quaternaryLoadingStyles;
        default:
          return primaryLoadingStyles;
      }
    }};

    ${({ textColor, disabled }) =>
      !!textColor &&
      !disabled &&
      `
      background-color: ${textColor};
    `};

    border-radius: 50%;
    display: inline-block;
    height: 4px;
    width: 4px;
    position: absolute;

    &:nth-of-type(1) {
      animation: ${statefulLoader} 1750ms infinite linear;
    }

    &:nth-of-type(2) {
      animation: ${statefulLoader} 1750ms infinite linear -300ms;
    }

    &:nth-of-type(3) {
      animation: ${statefulLoader} 1750ms infinite linear -600ms;
    }
  }
`;

export default ButtonLoader;
