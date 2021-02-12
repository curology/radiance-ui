import React from 'react';
import styled from '@emotion/styled';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { boolean, select } from '@storybook/addon-knobs';
import { VerificationMessages, Field } from 'src/shared-components';
import type { Meta } from '@storybook/react';

const FieldContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 350px;
`;

const messages = {
  required: (
    <React.Fragment>
      <strong>Uh oh!</strong> This field is required
    </React.Fragment>
  ),
  maxLength: (
    <React.Fragment>
      <strong>Uh oh!</strong> Must be at least 3 characters
    </React.Fragment>
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
    <VerificationMessages messages={messages} type="success" />
  </FieldContainer>
);

export const SecondarySuccess = () => <Success />;

SecondarySuccess.parameters = {
  michaelThemeTest: 'secondary',
};

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

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/VerificationMessages',
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
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
