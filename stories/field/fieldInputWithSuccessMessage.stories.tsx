import React, { useState } from 'react';
import { Field } from 'src/shared-components';

export const FieldInputWithSuccessMessage = () => {
  const [state, setState] = useState({
    messages: {},
    value: '',
  });

  const validate = (value: string) =>
    value.length > 0
      ? { successMessage: 'Thanks for completing this field' }
      : {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setState({
      messages: validate(value),
      value,
    });
  };

  const { value, messages } = state;

  return (
    <Field
      label="Input with success message"
      labelFor="input-success"
      messages={messages}
      messagesType="success"
    >
      <Field.Input
        id="input-success"
        type="text"
        value={value}
        onChange={onChange}
      />
    </Field>
  );
};
