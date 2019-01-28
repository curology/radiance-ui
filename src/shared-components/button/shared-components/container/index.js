import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { MEDIA_QUERIES, SPACING } from '../../../../constants';

const reverseStyles = css`
  flex-direction: column-reverse;

  & > :not(:last-child) {
    margin-bottom: 0;
    margin-top: ${SPACING.small};
  }
`;


const flexMdUpStyles = css`
  & > :not(:last-child) {
    margin-bottom: 0;
    margin-top: ${SPACING.small};
  }
`;

/* eslint-disable indent */
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
  }

  & > :not(:last-child) {
    margin-bottom: ${SPACING.small};
    margin-top: 0;
  }

  ${({ reverse }) => reverse && reverseStyles};

  ${MEDIA_QUERIES.mdUp} {
    & > :not(:last-child) {
      margin-bottom: ${SPACING.small};
      margin-top: 0;
      margin-right: 0;
    }

    ${({ reverse }) => reverse && reverseStyles};
    ${({ flex }) => flex && flexMdUpStyles};
  }
`;
/* eslint-enable */

ButtonContainer.propTypes = {
  flex: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default ButtonContainer;
