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
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import VerificationMessages from '../verificationMessages';
import { COLORS } from '../../constants';

class Field extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool,
    messages: PropTypes.objectOf(PropTypes.node),
    messagesType: PropTypes.oneOf(['error', 'success']),
    hideMessagesIcon: PropTypes.bool,
    hintMessage: PropTypes.string,
    label: PropTypes.string,
    labelFor: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    messages: {},
    messagesType: 'error',
    hideMessagesIcon: false,
    hintMessage: '',
    label: '',
    labelFor: '',
  };

  static Textarea = Textarea;

  static Input = Input;

  render() {
    const {
      children: inputChild,
      disabled,
      messages,
      messagesType,
      hideMessagesIcon,
      hintMessage,
      label,
      labelFor,
    } = this.props;

    const htmlFor = labelFor || label;
    const messagesKeys = Object.keys(messages);
    const showMessages = messagesKeys.length > 0;
    const MessageIcon =
      messagesType === 'success' ? (
        <CheckmarkIcon
          fill={COLORS.success}
          className="radiance-field-input-icon"
        />
      ) : (
        <ErrorIcon fill={COLORS.error} className="radiance-field-input-icon" />
      );

    return (
      <FieldContainer>
        {!!label && (
          <Label htmlFor={htmlFor} disabled={disabled}>
            {label}
          </Label>
        )}

        <InputContainer showMessages={showMessages} messagesType={messagesType}>
          {hideMessagesIcon || MessageIcon}

          {React.cloneElement(inputChild, {
            disabled,
          })}

          {!!hintMessage && <HintItem>{hintMessage}</HintItem>}

          <VerificationMessages messages={messages} type={messagesType} />
        </InputContainer>
      </FieldContainer>
    );
  }
}

export default Field;
