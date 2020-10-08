import React, { useState } from 'react';
import { Field } from 'src/shared-components';

export const FieldInputWithValidations = () => {
  const [state, setState] = useState({
    messages: {},
    value: '',
  });

  const validate = (value: string) => {
    const requiredError =
      value.length === 0 ? { required: 'This field is required' } : {};

    const maxLengthError =
      value.length > 3
        ? {
            maxLength: (
              <React.Fragment>
                <strong>Uh oh!</strong> Must be 3 or less characters
              </React.Fragment>
            ),
          }
        : {};

    const numberRegExp = /\d/;
    const numberRequiredError = numberRegExp.test(value)
      ? {}
      : {
          numberRequired: (
            <React.Fragment>
              <strong>Uh oh!</strong> Must contain at least 1 number
            </React.Fragment>
          ),
        };
    const val = { ...requiredError, ...maxLengthError, ...numberRequiredError };
    return val;
  };

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
      label="Input with validations"
      labelFor="input-validation"
      messages={messages}
    >
      <Field.Input
        id="input-validation"
        type="text"
        value={value}
        onChange={onChange}
      />
    </Field>
  );
};
