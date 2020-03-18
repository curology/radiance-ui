import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import { CenteredErrorList, ErrorList, ErrorItem } from './style';
import HelperTransition from '../../utils/helperTransition';
import formatError from './formatError';

const BulkErrors = ({ errors, centered }) => {
  const errorKeys = Object.keys(errors);
  const showErrors = errorKeys.length > 0;

  return (
    <TransitionGroup component={centered ? CenteredErrorList : ErrorList}>
      {showErrors &&
        errorKeys.map(key => (
          <HelperTransition key={key}>
            <ErrorItem>{formatError(errors[key])}</ErrorItem>
          </HelperTransition>
        ))}
    </TransitionGroup>
  );
};

BulkErrors.propTypes = {
  centered: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.node),
};

BulkErrors.defaultProps = {
  centered: false,
  errors: {},
};

export default BulkErrors;
