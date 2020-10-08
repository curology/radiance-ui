import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import { CenteredMessageList, MessageList, MessageItem } from './style';
import HelperTransition from '../../utils/helperTransition';
import formatMessage from './formatMessage';

export type MessagesTypes = 'error' | 'success';
export type MessageType = string | JSX.Element | Array<string | JSX.Element>;

type VerificationMessagesProps = {
  centered?: boolean;
  messages: {
    [key: string]: MessageType;
  };
  type?: MessagesTypes;
};

const VerificationMessages = ({
  centered = false,
  messages = {},
  type = 'error',
}: VerificationMessagesProps) => {
  const messageKeys = Object.keys(messages);

  if (messageKeys.length === 0) {
    return null;
  }

  return (
    <TransitionGroup component={centered ? CenteredMessageList : MessageList}>
      {messageKeys
        .filter((key) => {
          const message = messages[key];
          if (!Array.isArray(message)) {
            return true;
          }
          return message.length > 0;
        })
        .map((key) => (
          <HelperTransition key={key}>
            <MessageItem type={type}>
              {formatMessage(messages[key])}
            </MessageItem>
          </HelperTransition>
        ))}
    </TransitionGroup>
  );
};

VerificationMessages.propTypes = {
  centered: PropTypes.bool,
  messages: PropTypes.objectOf(PropTypes.node),
  type: PropTypes.oneOf(['error', 'success']),
};

export default VerificationMessages;
