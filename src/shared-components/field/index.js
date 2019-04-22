import PropTypes from 'prop-types';
import React from 'react';

import {
  FieldContainer,
  Label,
  InputContainer,
  Textarea,
  Input,
  HintItem,
} from './style';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import BulkErrors from '../bulkErrors';

class Field extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool,
    errors: PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ])
    ),
    hideErrorIcon: PropTypes.bool,
    hintMessage: PropTypes.string,
    label: PropTypes.string,
    labelFor: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    errors: {},
    hintMessage: '',
    label: '',
  };

  static Textarea = Textarea;

  static Input = Input;

  render() {
    const {
      children: inputChild,
      disabled,
      errors,
      hideErrorIcon,
      hintMessage,
      label,
      labelFor,
    } = this.props;

    const htmlFor = labelFor || label;
    const errorKeys = Object.keys(errors);
    const showErrors = errorKeys.length > 0;

    return (
      <FieldContainer>
        {!!label && (
          <Label htmlFor={htmlFor} disabled={disabled}>
            {label}
          </Label>
        )}

        <InputContainer showErrors={showErrors}>
          {hideErrorIcon || <ErrorIcon className="error-icon" />}

          {React.cloneElement(inputChild, {
            disabled,
          })}

          {!!hintMessage && <HintItem>{hintMessage}</HintItem>}
          <BulkErrors errors={errors} />
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
