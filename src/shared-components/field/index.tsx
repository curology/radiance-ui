import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from 'emotion-theming';

import Style from './style';
import { CheckmarkIcon, ErrorIcon } from '../../icons';
import {
  VerificationMessages,
  MessagesTypes,
  MessageType,
} from '../verificationMessages';

export interface FieldProps {
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
}

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
  const theme = useTheme();
  const htmlFor = labelFor || label;
  const messagesKeys = Object.keys(messages);
  const showMessages = messagesKeys.length > 0;
  const MessageIcon =
    messagesType === 'success' ? (
      <CheckmarkIcon
        fill={theme.COLORS.success}
        className="radiance-field-input-icon"
      />
    ) : (
      <ErrorIcon
        fill={theme.COLORS.error}
        className="radiance-field-input-icon"
      />
    );

  return (
    <Style.FieldContainer>
      {!!label && (
        <Style.Label htmlFor={htmlFor} disabled={disabled}>
          {label}
        </Style.Label>
      )}

      <Style.InputContainer
        showMessages={showMessages}
        messagesType={messagesType}
      >
        {hideMessagesIcon || MessageIcon}

        {React.cloneElement(inputChild, {
          disabled,
        })}

        {!!hintMessage && <Style.HintItem>{hintMessage}</Style.HintItem>}

        <VerificationMessages messages={messages} type={messagesType} />
      </Style.InputContainer>
    </Style.FieldContainer>
  );
};

Field.Textarea = Style.Textarea;

Field.Input = Style.Input;

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
