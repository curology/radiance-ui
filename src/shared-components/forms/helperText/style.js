import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { style as TYPOGRAPHY_STYLE } from '../../typography';

export const List = styled.ul`
  list-style-type: none;
  margin: 8px 0;
  min-height: 23px;
`;

export const CenteredList = styled(List)`
  text-align: center;
`;

export const ErrorItem = styled.li`
  ${TYPOGRAPHY_STYLE.error};
`;

export const HintItem = styled.li`
  ${TYPOGRAPHY_STYLE.caption};
`;

export const transitionStyles = css`
  .expand-enter {
    opacity: 0;
    max-height: 0;
  }

  .expand-enter.expand-enter-active {
    opacity: 1;
    max-height: 50px;
    transition-duration: 350ms;
    transition-property: max-height, opacity;
    transition-timing-function: ease-in;
  }

  .expand-leave {
    opacity: 1;
    max-height: 50px;
  }

  .expand-leave.expand-leave-active {
    opacity: 0;
    max-height: 0;
    transition-duration: 350ms;
    transition-property: max-height, opacity;
    transition-timing-function: ease-in;
  }
`;
