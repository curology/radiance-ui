import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import styled from '@emotion/styled';
import { boolean, select } from '@storybook/addon-knobs';
import VerificationMessagesReadme from 'docs/verificationMessages';
import { Typography, VerificationMessages, Field } from 'src/shared-components';

const MainContainer = styled.div`
  text-align: left;
`;

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

const stories = storiesOf('VerificationMessages', module);

const messagesTypeOptions = {
  error: 'error',
  success: 'success',
};

stories.add(
  'Usage',
  withDocs(VerificationMessagesReadme, () => (
    <MainContainer>
      <Typography.Heading>Example:</Typography.Heading>
      The input below is just a static placeholder and demostrates that the
      VerificationMessage can be used as standalone component. For a complete
      styling of the input use the Field component.
      <FieldContainer>
        <Field.Input />
        <VerificationMessages
          messages={messages}
          type={select('type', messagesTypeOptions, 'error')}
          centered={boolean('centered', true)}
        />
      </FieldContainer>
    </MainContainer>
  )),
);

const VerificationMessagesStory = {
  title: 'VerificationMessages',
  component: VerificationMessages,
};

export default VerificationMessagesStory;
