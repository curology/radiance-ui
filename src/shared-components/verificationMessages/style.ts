import styled from '@emotion/styled';

import { style as TYPOGRAPHY_STYLE } from '../typography';
import { SPACER } from '../../constants';

import { MessagesTypes } from '.';

export const MessageList = styled.ul`
  list-style-type: none;
  margin: 0;
`;

export const CenteredMessageList = styled(MessageList)`
  text-align: center;
`;

export const MessageItem = styled.li<{ type: MessagesTypes }>`
  &:last-of-type {
    margin: 0 0 ${SPACER.x2small} 0;
  }

  ${({ theme, type }) =>
    type === 'success'
      ? TYPOGRAPHY_STYLE.success(theme)
      : TYPOGRAPHY_STYLE.error(theme)}

  line-height: 24px;
`;
