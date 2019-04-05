import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FieldReadme from 'docs/forms/field.md';
import BulkErrorsReadme from 'docs/forms/bulkErrors.md';
import { Typography, BulkErrors, Field } from 'src/shared-components';

import InputWithValidation from './inputExample';

const MainContainer = styled.div`
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Forms', module);
stories.addDecorator(withKnobs);

stories.add(
  'Field',
  withDocs(FieldReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>
      <FormContainer>
        <InputWithValidation />
      </FormContainer>

      <FormContainer>
        <Field
          label="Textarea - no hint - no validation"
          labelFor="textarea-id"
        >
          <Field.Textarea id="textarea-id" />
        </Field>
      </FormContainer>

      <FormContainer>
        <Field label="Input - disabled">
          <Field.Input disabled />
        </Field>
      </FormContainer>

      <Typography.Heading>With Knobs:</Typography.Heading>
      <FormContainer>
        <Field
          labelFor="input-id"
          label={text('label', 'Input Label')}
          errorMessage={text('errorMessage', 'Error Message')}
          isValid={boolean('isValid', true)}
          hintMessage={text('hintMessage', 'Hint Message')}
        >
          <Field.Input id="input-id" />
        </Field>
      </FormContainer>
    </MainContainer>
  ))
);

stories.add(
  'BulkErrors',
  withDocs(BulkErrorsReadme, () => {
    const errors = {
      required: 'This field is required',
      maxLenght: 'Must be at least 8 characters',
    };
    return (
      <MainContainer>
        <Typography.Title>Bulk Errors:</Typography.Title>
        <FormContainer>
          <Field.Input type="text" />
          <BulkErrors errors={errors} />
        </FormContainer>
      </MainContainer>
    );
  })
);
