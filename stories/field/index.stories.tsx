import React from 'react';
import styled from '@emotion/styled';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Field, MessageType } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { FocusScope } from '@react-aria/focus';
import type { Meta } from '@storybook/react';

const FieldsContainer = styled.div`
  margin: 1rem 0.5rem 2rem 0.5rem;
  max-width: 350px;
`;

const messagesOptions = {
  'No messages': {},
  'One message': { m1: 'Message number 1' },
  'Two messages': { m1: 'Message number 1', m2: 'Message number 2' },
} as const;

const messagesTypeOptions = {
  error: 'error',
  success: 'success',
};

const useField = (
  validate: (value: string) => Record<string, MessageType> | undefined,
) => {
  const defaultValue = 'Placeholder';

  const [state, setState] = React.useState({
    messages: validate(defaultValue),
    value: defaultValue,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setState({
      messages: validate(value),
      value,
    });
  };

  return { onChange, state };
};

export const FieldInputWithSuccessMessage = () => {
  const validate = (value: string) =>
    value.length > 0
      ? { successMessage: 'Thanks for completing this field' }
      : undefined;

  const { state, onChange } = useField(validate);

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

export const FieldInputWithValidations = () => {
  const validate = (value: string) => {
    const requiredError =
      value.length === 0 ? { required: 'This field is required' } : undefined;

    const maxLengthRule = {
      maxLength: (
        <React.Fragment>
          <strong>Uh oh!</strong> Must be 3 or less characters
        </React.Fragment>
      ),
    };

    const maxLengthError = value.length > 3 ? maxLengthRule : {};

    const numberRequiredRule = {
      numberRequired: (
        <React.Fragment>
          <strong>Uh oh!</strong> Must contain at least 1 number
        </React.Fragment>
      ),
    };

    const numberRegExp = /\d/;
    const numberRequiredError = numberRegExp.test(value)
      ? {}
      : numberRequiredRule;

    return { ...requiredError, ...maxLengthError, ...numberRequiredError };
  };

  const { state, onChange } = useField(validate);

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

export const InputWithAHint = () => (
  <FieldsContainer>
    <FocusScope autoFocus>
      <Field
        label="Input with a Hint"
        labelFor="input-hint"
        hintMessage="This hint appears on focus"
      >
        <Field.Input id="input-hint" type="text" />
      </Field>
    </FocusScope>
  </FieldsContainer>
);

export const TextAreaNoHintNoValidation = () => (
  <FieldsContainer>
    <Field label="Textarea - no hint - no validation" labelFor="textarea-id">
      <Field.Textarea id="textarea-id" />
    </Field>
  </FieldsContainer>
);

TextAreaNoHintNoValidation.storyName = 'Textarea - no hint - no validation';

export const TextareaWithASuccessMessageAndHiddenIcon = () => (
  <FieldsContainer>
    <Field
      label="Textarea with a success message and hidden icon"
      labelFor="textarea-id"
      messages={{ successMessage: 'Thanks for your feedback' }}
      messagesType="success"
      hideMessagesIcon
    >
      <Field.Textarea id="textarea-id" value="some answer" />
    </Field>
  </FieldsContainer>
);

export const InputDisabled = () => (
  <FieldsContainer>
    <Field label="Input - disabled" disabled>
      <Field.Input />
    </Field>
  </FieldsContainer>
);

InputDisabled.storyName = 'Input - disabled';

export const FieldInputOnly = () => (
  <Field.Input placeholder="You can use Field.Input directly" />
);

export const WithControls = () => (
  <FieldsContainer>
    <Field
      disabled={boolean('disabled', false)}
      // @ts-expect-error: select + Field['message'] type compat issue
      messages={select('messages', messagesOptions, {})}
      messagesType={
        select('messagesType', messagesTypeOptions, 'error') as
          | 'error'
          | 'success'
      }
      hideMessagesIcon={boolean('hideMessagesIcon', false)}
      hintMessage={text('hintMessage', 'Hint Message')}
      label={text('label', 'Input Label')}
      labelFor="input-with-knobs"
    >
      <Field.Input id="input-with-knobs" />
    </Field>
  </FieldsContainer>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

const FIELD_STORIES: Meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Field } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default FIELD_STORIES;
