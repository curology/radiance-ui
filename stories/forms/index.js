import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';

import FormSectionReadme from 'docs/forms/formSection.md';
import TextareaReadme from 'docs/forms/textarea.md';
import BulkErrorsReadme from 'docs/forms/bulkErrors.md';
import {
  Typography,
  FormSection,
  inputStyles,
  baseInputStyles,
  BulkErrors,
  Textarea,
} from 'src/shared-components';

const MainContainer = styled.div`
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Forms', module);

stories.add(
  'FormSection',
  withDocs(FormSectionReadme, () => {
    class InputWithValidation extends React.Component {
      state = {
        isValid: true,
        value: '',
      };

      onChange = event => {
        const { value } = event.target;
        this.setState({
          isValid: this.validate(value),
          value,
        });
      };

      validate = value => value.length >= 6;

      render() {
        const { isValid, value } = this.state;
        const css = inputStyles(!isValid, 'focusSecondary');

        return (
          <FormSection
            isValid={isValid}
            label="Example with Validation"
            labelFor="example"
            errorMessage="Must be 6 characters or longer"
          >
            <input
              css={css}
              id="example"
              type="text"
              value={value}
              onChange={this.onChange}
            />
          </FormSection>
        );
      }
    }

    return (
      <MainContainer>
        <FormContainer>
          <InputWithValidation />
        </FormContainer>

        <FormContainer>
          <FormSection
            label="Example with a Hint"
            labelFor="example-hint"
            hint="This is a Hint message"
            isFocused
          >
            <input type="text" id="example-hint" css={baseInputStyles} />
          </FormSection>
        </FormContainer>
      </MainContainer>
    );
  })
);

stories.add(
  'Textarea',
  withDocs(TextareaReadme, () => (
    <MainContainer>
      <Typography.Title>Textarea:</Typography.Title>
      <FormContainer>
        <FormSection
          label="Example Textarea"
          labelFor="example-textarea"
          hint="This is a Hint message"
          isFocused
        >
          <Textarea id="example-textarea" />
        </FormSection>
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
          <input type="text" css={baseInputStyles} />
          <BulkErrors errors={errors} />
        </FormContainer>
      </MainContainer>
    );
  })
);
