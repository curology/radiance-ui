import PropTypes from 'prop-types';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Global } from '@emotion/core';

import {
  FieldContainer,
  InputContainer,
  Textarea,
  Input,
  transitionStyles,
  ErrorItem,
  HintItem,
} from './style';
// import HelperText from './helperText';
// import { ErrorItem, HintItem } from './helperText/style';
import Typography from '../typography';
import ErrorIcon from '../../svgs/icons/error-icon.svg';

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
        <Global styles={transitionStyles} />
        {!!label && (
          <Typography.Label htmlFor={htmlFor}>{label}</Typography.Label>
        )}

        <InputContainer showError={showError}>
          <ErrorIcon />

          {children}

          <TransitionGroup component="ul">
            {!!hintMessage && (
              <CSSTransition classNames="expand" timeout={350}>
                <HintItem key="hint">{hintMessage}</HintItem>
              </CSSTransition>
            )}
            {showError && (
              <CSSTransition in appear classNames="expand" timeout={350}>
                <ErrorItem key="error">{errorMessage}</ErrorItem>
              </CSSTransition>
            )}
          </TransitionGroup>
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
