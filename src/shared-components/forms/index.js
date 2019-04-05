import PropTypes from 'prop-types';
import React from 'react';

import { FieldContainer, InputContainer, Textarea, Input } from './style';
import HelperText from './helperText';
import { ErrorItem, HintItem } from './helperText/style';
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
        {!!label && (
          <Typography.Label htmlFor={htmlFor}>{label}</Typography.Label>
        )}

        <InputContainer showError={showError}>
          <ErrorIcon />

          {children}

          <HelperText>
            {!!hintMessage && <HintItem key="hint">{hintMessage}</HintItem>}
            {showError && <ErrorItem key="error">{errorMessage}</ErrorItem>}
          </HelperText>
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
