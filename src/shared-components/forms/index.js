import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import {
  FieldContainer,
  InputContainer,
  Textarea,
  Input,
  ErrorItem,
  HintItem,
  HelperList,
} from './style';
import Typography from '../typography';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import HelperTransition from './helperTransition';

class Field extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    errors: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ])
    ),
    hintMessage: PropTypes.string,
    label: PropTypes.string,
    labelFor: PropTypes.string,
  };

  static defaultProps = {
    errors: {},
    hintMessage: '',
    label: '',
  };

  static Textarea = Textarea;

  static Input = Input;

  formatError = errorValue =>
    Array.isArray(errorValue) ? errorValue.join(', ') : errorValue;

  render() {
    const { children, errors, hintMessage, label, labelFor } = this.props;

    const htmlFor = labelFor || label;
    const errorKeys = Object.keys(errors);
    const showErrors = errorKeys.length > 0;

    return (
      <FieldContainer>
        {!!label && (
          <Typography.Label htmlFor={htmlFor}>{label}</Typography.Label>
        )}

        <InputContainer showErrors={showErrors}>
          <ErrorIcon />

          {children}

          <TransitionGroup component={HelperList}>
            {!!hintMessage && (
              <HelperTransition key="hint-message">
                <HintItem>{hintMessage}</HintItem>
              </HelperTransition>
            )}
            {showErrors &&
              errorKeys.map(key => (
                <HelperTransition key={key}>
                  <ErrorItem>{this.formatError(errors[key])}</ErrorItem>
                </HelperTransition>
              ))}
          </TransitionGroup>
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
