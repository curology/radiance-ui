import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import {
  withKnobs, text, select, boolean, 
} from '@storybook/addon-knobs';
import FieldReadme from 'docs/field';
import { Typography, Field } from 'src/shared-components';

import FieldInputWithValidations from './fieldInputWithValidations';

const MainContainer = styled.div`
  text-align: left;
`;

const FieldContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const stories = storiesOf('Field', module);
stories.addDecorator(withKnobs);

const errorOptions = {
  'No errors': {},
  'One error': { e1: 'Error message number 1' },
  'Two errors': { e1: 'Error message number 1', e2: 'Error message number 2' },
};

stories.add(
  'Usage',
  withDocs(FieldReadme, () => (
    <MainContainer>
      <Typography.Heading>Examples:</Typography.Heading>
      <FieldContainer>
        <FieldInputWithValidations />
        <FieldInputWithValidations />
        <Field
          label="Input with a Hint"
          labelFor="input-hint"
          hintMessage="This hint appears on focus"
        >
          <Field.Input id="input-hint" type="text" />
        </Field>
      </FieldContainer>

      <FieldContainer>
        <Field
          label="Textarea - no hint - no validation"
          labelFor="textarea-id"
        >
          <Field.Textarea id="textarea-id" />
        </Field>
      </FieldContainer>

      <FieldContainer>
        <Field.Input placeholder="You can use Field.Input directly" />
      </FieldContainer>

      <FieldContainer>
        <Field label="Input - disabled" disabled>
          <Field.Input />
        </Field>
      </FieldContainer>

      <Typography.Heading>With Knobs:</Typography.Heading>
      <FieldContainer>
        <Field
          disabled={boolean('disabled', false)}
          errors={select('errors', errorOptions, {})}
          hideErrorIcon={boolean('hideErrorIcon', false)}
          hintMessage={text('hintMessage', 'Hint Message')}
          label={text('label', 'Input Label')}
          labelFor="input-with-knobs"
        >
          <Field.Input id="input-with-knobs" />
        </Field>
      </FieldContainer>
    </MainContainer>
  )),
);
