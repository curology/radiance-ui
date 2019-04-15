import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import BulkErrorsReadme from 'docs/bulkErrors.md';
import { Typography, BulkErrors, Field } from 'src/shared-components';

const MainContainer = styled.div`
  text-align: left;
`;

const FieldContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const errors = {
  required: 'This field is required',
  maxLength: 'Must be 3 or less characters',
  charactersRequired: ['Must contain 1 number', 'Must contain 1 symbol'],
};

const stories = storiesOf('BulkErrors', module);
stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(BulkErrorsReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>
      <FieldContainer>
        <Field.Input />
        <BulkErrors errors={errors} centered={boolean('centered', true)} />
      </FieldContainer>
    </MainContainer>
  ))
);
