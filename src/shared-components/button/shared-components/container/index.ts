import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { MEDIA_QUERIES, SPACER } from '../../../../constants';

const reverseStyles = css`
  flex-direction: column-reverse;

  & > :not(:last-child) {
    margin-bottom: 0;
    margin-top: ${SPACER.medium};
  }
`;

const flexMdUpStyles = css`
  & > :not(:last-child) {
    margin-bottom: 0;
    margin-top: ${SPACER.medium};
  }
`;

const ButtonContainer = styled.div<{ reverse?: boolean; flex?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
  }

  & > :not(:last-child) {
    margin-bottom: ${SPACER.medium};
    margin-top: 0;
  }

  ${({ reverse }) => reverse && reverseStyles};

  ${MEDIA_QUERIES.mdUp} {
    & > :not(:last-child) {
      margin-bottom: ${SPACER.medium};
      margin-top: 0;
      margin-right: 0;
    }

    ${({ reverse }) => reverse && reverseStyles};
    ${({ flex }) => flex && flexMdUpStyles};
  }
`;

ButtonContainer.propTypes = {
  flex: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default ButtonContainer;
