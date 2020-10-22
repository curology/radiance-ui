import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import { CenteredMessageList, MessageList, MessageItem } from './style';
import HelperTransition from '../../utils/helperTransition';
import formatMessage from './formatMessage';

export type MessagesTypes = 'error' | 'success';
export type MessageType = string | JSX.Element | Array<string | JSX.Element>;

type VerificationMessagesProps = {
  /**
   * Centers the messages
   */
  centered?: boolean;
  /**
   * Object of key and React Node message pair. It also accepts an array of React Node as value
   */
  messages?: {
    [key: string]: MessageType;
  };
  type?: MessagesTypes;
};

/**
 * Verification messages help provide context and status within forms.
 *
 * They should be short and explanative.
 *
 * Verification message color should match the alert status, so they can either be `error` or `success`.
 *
 * While it can be used as a standalone component, it is intended for use within the Field component.
 */
export const VerificationMessages = ({
  centered = false,
  messages = {},
  type = 'error',
}: VerificationMessagesProps) => {
  const messageKeys = Object.keys(messages);
  const showMessages = messageKeys.length > 0;

  return (
    <TransitionGroup component={centered ? CenteredMessageList : MessageList}>
      {showMessages ? (
        messageKeys
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
          ))
      ) : (
        <React.Fragment />
      )}
    </TransitionGroup>
  );
};

VerificationMessages.propTypes = {
  centered: PropTypes.bool,
  messages: PropTypes.objectOf(PropTypes.node),
  type: PropTypes.oneOf(['error', 'success']),
};
