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
    children: PropTypes.node,
    hintMessage: PropTypes.string,
    errorMessage: PropTypes.string,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    labelFor: PropTypes.string,
  };

  static defaultProps = {
    hintMessage: '',
    errorMessage: '',
    isValid: true,
    label: '',
  };

  static Textarea = Textarea;

  static Input = Input;

  render() {
    const {
      label,
      labelFor,
      errorMessage,
      isValid,
      hintMessage,
      children,
    } = this.props;

    const htmlFor = labelFor || label;
    const showError = !!(errorMessage && !isValid);

    return (
      <FieldContainer>
        {!!label && (
          <Typography.Label htmlFor={htmlFor}>{label}</Typography.Label>
        )}

        <InputContainer showError={showError}>
          <ErrorIcon />

          {children}

          <TransitionGroup component={HelperList}>
            {!!hintMessage && (
              <HelperTransition>
                <HintItem key="hint">{hintMessage}</HintItem>
              </HelperTransition>
            )}
            {showError && (
              <HelperTransition>
                <ErrorItem key="error">{errorMessage}</ErrorItem>
              </HelperTransition>
            )}
          </TransitionGroup>
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
