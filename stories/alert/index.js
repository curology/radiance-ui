import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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
        <Alert
          content={
            <div>
              <strong>Default Alert:</strong> it will dissapear after 3 seconds
            </div>
          }
        />
        <Alert
          content={
            <div>
              <strong>Did you hear?</strong> we launched a sunscreen
            </div>
          }
          duration="sticky"
        />
        <Alert
          content={
            <div>
              <strong>Whoops!</strong> There was an error updating your address,
              pleas try again later
            </div>
          }
          type="error"
          duration="sticky"
        />
        <Alert
          content={
            <div>
              <strong>Success!</strong> your photos were accepted
            </div>
          }
          type="success"
          duration="sticky"
        />
        <Alert
          content={
            <div>
              <strong>New message from Jasmin:</strong> “Be sure to upload a few
              more photos so that we can continue with your treatment”
            </div>
          }
          duration="sticky"
          avatarSrc={avatarImageSrc}
        />
        <Alert
          content={
            <div>
              <strong>Whoops!</strong> There was an error updating your address,
              pleas try again later
            </div>
          }
          type="error"
          ctaContent="Update Payment Method"
          /* eslint-disable */
          onCtaClick={() => alert('cta alert clicked')}
          /* eslint-enable */
        />
      </Alert.Container>

      <Typography.Heading>With Knobs</Typography.Heading>
      <Alert
        content={text('text', 'This is an alert')}
        type={select('type', ['default', 'success', 'error'], 'default')}
        duration="sticky"
        onExit={action('alert exited')}
      />
    </React.Fragment>
  )),
);
