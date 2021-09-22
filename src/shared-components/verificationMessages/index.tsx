import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import Style from './style';
import HelperTransition from '../../utils/helperTransition';
import formatMessage from './formatMessage';

export type MessagesTypes = 'error' | 'success';
export type MessageType = string | JSX.Element | Array<string | JSX.Element>;

export interface VerificationMessagesProps {
  /**
   * Centers the messages
   */
  centered?: boolean;
  /**
   * Object of key and React Node message pair. It also accepts an array of React Node as value
   */
  messages?: Record<string, MessageType>;
  type?: MessagesTypes;
}

/**
 * Verification messages help provide context and status within forms.
 *
 * They should be short and explanative.
 *
 * Verification message color should match the alert status, so they can either be `error` or `success`.
 *
 * While it can be used as a standalone component, it is intended for use within the Field component.
 */
export const VerificationMessages: React.FC<VerificationMessagesProps> = ({
  centered = false,
  messages = {},
  type = 'error',
}) => {
  const messageKeys = Object.keys(messages);
  const showMessages = messageKeys.length > 0;

  return (
    <TransitionGroup
      component={centered ? Style.CenteredMessageList : Style.MessageList}
    >
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
              <Style.MessageItem type={type}>
                {formatMessage(messages[key])}
              </Style.MessageItem>
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
  messages: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string.isRequired),
      PropTypes.arrayOf(PropTypes.element.isRequired),
    ]).isRequired,
  ),
  type: PropTypes.oneOf(['error', 'success']),
};
