import React from 'react';
import uniqueid from 'lodash.uniqueid';

import type { MessageType } from '..';

const formatMessage = (message: MessageType) => {
  if (Array.isArray(message)) {
    const mapResult = message.map((value) => (
      <React.Fragment key={uniqueid()}>{value}</React.Fragment>
    ));

    return (
      <React.Fragment>
        {mapResult.reduce((prev, curr) => (
          <React.Fragment>
            {prev}
            {', '}
            {curr}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
  return message;
};

export default formatMessage;
