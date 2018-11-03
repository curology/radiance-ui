import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import AlertReadme from 'docs/alert.md';
import { Alert, Typography } from 'src/shared-components';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(AlertReadme, () => (
    <React.Fragment>
      <Alert.Container>
        <Alert
          text="Your photos were uploaded successfully!"
          type="success"
          duration={4}
          onExit={() => {}}
        />
        <Alert
          text="Your photos were uploaded successfully!"
          type="success"
          duration="sticky"
          onExit={() => {}}
        />
        <Alert
          text="Support has been notified."
          type="info"
          duration="sticky"
          onExit={() => {}}
        />
        <Alert
          text="Oops! We couldn't update your information!"
          type="danger"
          duration="sticky"
          onExit={() => {}}
        />
      </Alert.Container>
      <Typography.Heading>With Knobs</Typography.Heading>
      <Alert
        text={text('text', 'This is an alert')}
        type={select('type', ['success', 'info', 'danger'], 'info')}
        duration='sticky'
        onExit={() => {}}
      />
    </React.Fragment>
  ))
);
