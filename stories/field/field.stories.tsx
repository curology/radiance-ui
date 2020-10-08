import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Field, Typography } from 'src/shared-components';

export * from './fieldInputWithValidations.stories';
export * from './fieldInputWithSuccessMessage.stories';
// import FieldDocs from './field.stories.mdx';

const FieldsContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
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

export const InputWithAHint = () => (
  <FieldsContainer>
    <Field
      label="Input with a Hint"
      labelFor="input-hint"
      hintMessage="This hint appears on focus"
    >
      <Field.Input id="input-hint" type="text" />
    </Field>
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
      // @ts-ignore
      messages={select('messages', messagesOptions, {})}
      messagesType={select('messagesType', messagesTypeOptions, 'error')}
      hideMessagesIcon={boolean('hideMessagesIcon', false)}
      hintMessage={text('hintMessage', 'Hint Message')}
      label={text('label', 'Input Label')}
      labelFor="input-with-knobs"
    >
      <Field.Input id="input-with-knobs" />
    </Field>
  </FieldsContainer>
);
