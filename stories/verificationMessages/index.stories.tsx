import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { boolean, select } from '@storybook/addon-knobs';
import { VerificationMessages, Field } from 'src/shared-components';
import {
  Title,
  Primary,
  Description,
  Source,
  Heading,
  ArgsTable,
  Stories,
} from '@storybook/addon-docs/blocks';

const FieldContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const messages = {
  required: (
    <Fragment>
      <strong>Uh oh!</strong> This field is required
    </Fragment>
  ),
  maxLength: (
    <Fragment>
      <strong>Uh oh!</strong> Must be at least 3 characters
    </Fragment>
  ),
  charactersRequired: ['Must contain 1 number', 'Must contain 1 symbol'],
};

const messagesTypeOptions = {
  error: 'error',
  success: 'success',
} as const;

export const Error = () => (
  <FieldContainer>
    <Field.Input />
    <VerificationMessages messages={messages} type="error" centered />
  </FieldContainer>
);

export const Success = () => (
  <FieldContainer>
    <Field.Input />
    <VerificationMessages messages={messages} type="success" centered />
  </FieldContainer>
);

export const WithControls = () => (
  <FieldContainer>
    <Field.Input />
    <VerificationMessages
      messages={messages}
      type={select('type', messagesTypeOptions, 'error')}
      centered={boolean('centered', false)}
    />
  </FieldContainer>
);

export default {
  title: 'VerificationMessages',
  component: VerificationMessages,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { VerificationMessages } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
