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
import {
  VerificationMessages,
  MessagesTypes,
  MessageType,
} from '../verificationMessages';
import { COLORS } from '../../constants';

type FieldProps = {
  /**
   * Must be either `Field.Input` or `Field.Textarea`
   */
  children: JSX.Element;
  /**
   * Change the child input to `disabled` state
   */
  disabled?: boolean;
  /**
   * Hides the message icon at the rightmost part of the input
   */
  hideMessagesIcon?: boolean;
  /**
   * The hint to display below the field. It activates on focus
   */
  hintMessage?: string;
  /**
   * The field label
   */
  label?: string;
  /**
   * Must match the children id html attribute
   */
  labelFor?: string;
  /**
   * Object of key and React Node message pair. It also accepts an array of React Node as value
   */
  messages?: Record<string, MessageType>;
  messagesType?: MessagesTypes;
};

/**
 * Field component uses VerificationMessages component internally along with extra styling for the input.
 *
 * If you don't need validation, label or hint message; you can use `Field.Input` or `Field.Textarea` directly without the `Field` wrapper.
 */
export const Field = ({
  children: inputChild,
  disabled = false,
  hideMessagesIcon = false,
  hintMessage = '',
  label = '',
  labelFor = '',
  messages = {},
  messagesType = 'error',
}: FieldProps) => {
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
};

Field.Textarea = Textarea;

Field.Input = Input;

Field.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  hideMessagesIcon: PropTypes.bool,
  hintMessage: PropTypes.string,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  messages: PropTypes.objectOf(PropTypes.node),
  messagesType: PropTypes.oneOf(['error', 'success']),
};
