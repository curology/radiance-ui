import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import { text, select, boolean } from '@storybook/addon-knobs';
import FieldReadme from 'docs/field';
import { Typography, Field } from 'src/shared-components';

import FieldInputWithValidations from './fieldInputWithValidations';
import FieldInputWithSuccessMessage from './fieldInputWithSuccessMessage';

const MainContainer = styled.div`
  text-align: left;
`;

const FieldsContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Field', module);

const messagesOptions = {
  'No messages': {},
  'One message': { m1: 'Message number 1' },
  'Two messages': { m1: 'Message number 1', m2: 'Message number 2' },
};

const messagesTypeOptions = {
  error: 'error',
  success: 'success',
};

stories.add(
  'Usage',
  withDocs(FieldReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>
      <FieldsContainer>
        <FieldInputWithValidations />

        <FieldInputWithSuccessMessage />

        <Field
          label="Input with a Hint"
          labelFor="input-hint"
          hintMessage="This hint appears on focus"
        >
          <Field.Input id="input-hint" type="text" />
        </Field>

        <Field
          label="Textarea - no hint - no validation"
          labelFor="textarea-id"
        >
          <Field.Textarea id="textarea-id" />
        </Field>

        <Field
          label="Textarea with a success message and hidden icon"
          labelFor="textarea-id"
          messages={{ successMessage: 'Thanks for your feedback' }}
          messagesType="success"
          hideMessagesIcon
        >
          <Field.Textarea id="textarea-id" value="some answer" />
        </Field>

        <Field label="Input - disabled" disabled>
          <Field.Input />
        </Field>

        <Field.Input placeholder="You can use Field.Input directly" />
      </FieldsContainer>

      <Typography.Heading>With Knobs:</Typography.Heading>

      <FieldsContainer>
        <Field
          disabled={boolean('disabled', false)}
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
    </MainContainer>
  )),
);

const FieldStory = {
  title: 'Field',
  component: Field,
};

export default FieldStory;
