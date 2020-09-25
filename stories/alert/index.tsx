import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Alert, Typography } from 'src/shared-components';
import AlertReadme from 'docs/alert';

import avatarSrc from './avatarImage.jpg';

const stories = storiesOf('Alert', module);

stories.addDecorator(withKnobs);

const alertMap = new Map();

const onExit = (id: number) => () => alertMap.delete(id);

const alerts = [
  {
    id: 0,
    content: 'Default Alert: it will disappear after 3 seconds',
    onExit: onExit(0),
  },
  {
    id: 1,
    content: (
      <Fragment>
        <strong>Did you hear?</strong> we launched a sunscreen
      </Fragment>
    ),
    duration: 'sticky',
    onExit: onExit(1),
  },
  {
    id: 2,
    content: (
      <Fragment>
        <strong>Whoops!</strong> There was an error updating your address,
        please try again later
      </Fragment>
    ),
    type: 'error',
    duration: 'sticky',
    onExit: onExit(2),
  },
  {
    id: 3,
    content: (
      <Fragment>
        <strong>Success!</strong> your photos were accepted
      </Fragment>
    ),
    type: 'success',
    duration: 'sticky',
    onExit: onExit(3),
  },
  {
    id: 4,
    content: (
      <Fragment>
        <strong>New message from Jasmin:</strong> “Be sure to upload a few more
        photos so that we can continue with your treatment”
      </Fragment>
    ),
    duration: 'sticky',
    avatarSrc,
    truncateText: true,
    onExit: onExit(4),
  },
  {
    id: 5,
    content: (
      <Fragment>
        <strong>Whoops!</strong> There was an error updating your address,
        please try again later
      </Fragment>
    ),
    type: 'error',
    ctaContent: 'Update Payment Method',
    onExit: () => {
      alert('cta alert clicked');
      onExit(5)();
    },
  },
];

alerts.forEach((alert) => alertMap.set(alert.id, alert));

stories.add(
  'Usage',
  withDocs(AlertReadme, () => {
    const [alertStore, setAlertStore] = React.useState(
      Array.from(alertMap.values()),
    );

    return (
      <React.Fragment>
        {alertStore.length > 0 && (
          <Alert.Container>
            {alertStore.map((alert) => (
              <Alert
                key={alert.id}
                content={alert.content}
                type={alert.type}
                duration={alert.duration}
                avatarSrc={alert.avatarSrc}
                truncateText={alert.truncateText}
                ctaContent={alert.ctaContent}
                onExit={() => {
                  alert.onExit();
                  setAlertStore(Array.from(alertMap.values()));
                }}
              />
            ))}
          </Alert.Container>
        )}

        <Typography.Heading>With Knobs</Typography.Heading>
        <Alert
          avatarSrc={boolean('avatarSrc', false) ? avatarSrc : ''}
          content={text('content', 'This is the alert text')}
          ctaContent={text('ctaContent', '')}
          duration="sticky"
          type={select('type', ['default', 'success', 'error'], 'default')}
        />
      </React.Fragment>
    );
  }),
);
