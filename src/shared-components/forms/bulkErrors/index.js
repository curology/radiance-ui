import React from 'react';
import PropTypes from 'prop-types';

import HelperText from '../helperText';
import { ErrorItem } from '../helperText/style';

function formatError(error) {
  return Array.isArray(error) ? error.join(', ') : error;
}

const BulkErrors = ({ errors = {} }) => {
  const errorKeys = Object.keys(errors);
  return (
    <HelperText centered>
      {!!errorKeys.length &&
        errorKeys.map(key => (
          <ErrorItem key={key}>{formatError(errors[key])}</ErrorItem>
        ))}
    </HelperText>
  );
};

BulkErrors.propTypes = {
  errors: PropTypes.shape({}),
};

export default BulkErrors;
