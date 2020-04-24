import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import {
  withKnobs, text, select, boolean, 
} from '@storybook/addon-knobs';
import AlertReadme from 'docs/alert';
import { Alert, Typography } from 'src/shared-components';

import avatarImageSrc from './avatarImage.jpg';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(AlertReadme, () => (
    <React.Fragment>
      <Alert.Container>
        <Alert content="Default Alert: it will disappear after 3 seconds" />
        <Alert
          content={
            <Fragment>
              <strong>Did you hear?</strong> we launched a sunscreen
            </Fragment>
          }
          duration="sticky"
        />
        <Alert
          content={
            <Fragment>
              <strong>Whoops!</strong> There was an error updating your address,
              please try again later
            </Fragment>
          }
          type="error"
          duration="sticky"
        />
        <Alert
          content={
            <Fragment>
              <strong>Success!</strong> your photos were accepted
            </Fragment>
          }
          type="success"
          duration="sticky"
        />
        <Alert
          content={
            <Fragment>
              <strong>New message from Jasmin:</strong> “Be sure to upload a few
              more photos so that we can continue with your treatment”
            </Fragment>
          }
          duration="sticky"
          avatarSrc={avatarImageSrc}
        />
        <Alert
          content={
            <Fragment>
              <strong>Whoops!</strong> There was an error updating your address,
              pleas try again later
            </Fragment>
          }
          type="error"
          ctaContent="Update Payment Method"
          /* eslint-disable */
          onExit={() => alert('cta alert clicked')}
          /* eslint-enable */
        />
      </Alert.Container>

      <Typography.Heading>With Knobs</Typography.Heading>
      <Alert
        avatarSrc={boolean('avatarSrc', false) ? avatarImageSrc : ''}
        content={text('content', 'This is the alert text')}
        ctaContent={text('ctaContent', '')}
        duration="sticky"
        type={select('type', ['default', 'success', 'error'], 'default')}
      />
    </React.Fragment>
  )),
);
