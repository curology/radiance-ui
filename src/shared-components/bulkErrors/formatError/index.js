import React, { Fragment } from 'react';
import uniqueid from 'lodash.uniqueid';

const formatError = errorValue => {
  if (Array.isArray(errorValue)) {
    return (
      <Fragment>
        {errorValue
          .map(value => <Fragment key={uniqueid()}>{value}</Fragment>)
          .reduce((prev, curr) => [prev, ', ', curr])}
      </Fragment>
    );
  }
  return errorValue;
};

export default formatError;
