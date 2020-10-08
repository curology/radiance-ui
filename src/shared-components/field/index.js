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

/**
 * Field component uses VerificationMessages component internally along with extra styling for the input.
 *
 * If you don't need validation, label or hint message; you can use `Field.Input` or `Field.Textarea` directly without the `Field` wrapper.
 */
class Field extends React.Component {
  static propTypes = {
    /**
     * Must be either `Field.Input` or `Field.Textarea`
     */
    children: PropTypes.element.isRequired,
    /**
     * Change the child input to `disabled` state
     */
    disabled: PropTypes.bool,
    /**
     * Object of key and React Node message pair. It also accepts an array of React Node as value
     */
    messages: PropTypes.objectOf(PropTypes.node),
    messagesType: PropTypes.oneOf(['error', 'success']),
    /**
     * Hides the message icon at the rightmost part of the input
     */
    hideMessagesIcon: PropTypes.bool,
    /**
     * The hint to display below the field. It activates on focus
     */
    hintMessage: PropTypes.string,
    /**
     * The field label
     */
    label: PropTypes.string,
    /**
     * Must match the children id html attribute
     */
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
