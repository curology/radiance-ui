import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import FormsReadme from 'docs/forms.md';
import { FormSection, Typography } from 'src/shared-components';

import InputExample from './inputExample';
import TextareaExample from './textareaExample';

const MainContainer = styled.div`
  text-align: left;
`;

const FormContainer = styled.div`
  margin: 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Forms', module);
stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(FormsReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>

      <div>
        <h5>An input from can be constructed using the FormSection.</h5>
        <FormContainer>
          <InputExample />
        </FormContainer>
      </div>

      <div>
        <h5>Textarea</h5>
        <FormContainer>
          <TextareaExample />
        </FormContainer>
      </div>

      <Typography.Heading>With Knobs:</Typography.Heading>

      <div>
        <h5>
          A FormLabelSection will render the label and hint text if the
          component is focused:
        </h5>
        <FormContainer>
          <FormSection
            isFocused={boolean('isFocused', true)}
            label={text('label', 'Input Label')}
            labelFor={text('labelFor', 'inputLabel')}
            hint={text('hint', 'Required')}
          >
            Renders children
          </FormSection>
        </FormContainer>
      </div>
    </MainContainer>
  ))
);
