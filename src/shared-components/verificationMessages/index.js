import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import { CenteredMessageList, MessageList, MessageItem } from './style';
import HelperTransition from '../../utils/helperTransition';
import formatMessage from './formatMessage';

const VerificationMessages = ({ messages, centered, type }) => {
  const messageKeys = Object.keys(messages);
  const showMessages = messageKeys.length > 0;

  return (
    <TransitionGroup component={centered ? CenteredMessageList : MessageList}>
      {showMessages &&
        messageKeys.map(key => (
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
  type: PropTypes.oneOf(['error', 'success']),
  messages: PropTypes.objectOf(PropTypes.node),
};

VerificationMessages.defaultProps = {
  centered: false,
  type: 'error',
  messages: {},
};

export default VerificationMessages;
