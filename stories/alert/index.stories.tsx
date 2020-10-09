import React from 'react';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import { Alert } from 'src/shared-components';
import avatarImageSrc from 'shared/person.jpg';

export const Default = () => (
  <Alert content="Default Alert: it will disappear after 3 seconds" />
);

Default.storyName = "Disappearing (Default)"

export const Sticky = () => (
  <Alert
    content={
      <React.Fragment>
        <strong>Did you hear?</strong> we launched a sunscreen
      </React.Fragment>
    }
    duration="sticky"
  />
);

export const Error = () => (
  <Alert
    content={
      <React.Fragment>
        <strong>Whoops!</strong> There was an error updating your address,
        please try again later
      </React.Fragment>
    }
    type="error"
    duration="sticky"
  />
);

export const Success = () => (
  <Alert
    content={
      <React.Fragment>
        <strong>Success!</strong> your photos were accepted
      </React.Fragment>
    }
    type="success"
    duration="sticky"
  />
);

export const WithCallToAction = () => (
  <Alert
    content={
      <React.Fragment>
        <strong>Whoops!</strong> There was an error updating your address,
        please try again later
      </React.Fragment>
    }
    type="error"
    ctaContent="Update Payment Method"
    onExit={() => alert('cta alert clicked')}
  />
);

export const WithImage = () => (
  <Alert
    content={
      <React.Fragment>
        <strong>New message from Jasmin:</strong> “Be sure to upload a few more
        photos so that we can continue with your treatment”
      </React.Fragment>
    }
    duration="sticky"
    avatarSrc={avatarImageSrc}
    truncateText
  />
);

/**
 * Must be last story exported for bottom-most description to associate with it.
 */
export const WithAlertContainer = () => (
  <Alert.Container>
    <Alert content="Alert.Container fixes my position" />
  </Alert.Container>
);

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Alert } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
          <Stories />
          <Description>
            Alert.Container Absolutely positions the alerts by default. (As
            such, it escapes the canvas container.)
          </Description>
        </React.Fragment>
      ),
    },
  },
};
