import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BannerReadme from 'docs/banner.md';
import { Banner, Typography } from 'src/shared-components';

const stories = storiesOf('Banner', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(BannerReadme, () => (
    <React.Fragment>
      <Banner.Container>
        <Banner
          text="Your photos were uploaded successfully!"
          type="success"
          duration={4}
          onExit={() => { }}
        />
        <Banner
          text="Your photos were uploaded successfully!"
          type="success"
          duration="sticky"
          onExit={() => { }}
        />
        <Banner
          text="Support has been notified."
          type="info"
          duration="sticky"
          onExit={() => { }}
        />
        <Banner
          text="Oops! We couldn't update your information!"
          type="danger"
          duration="sticky"
          onExit={() => { }}
        />
      </Banner.Container>
      <Banner
        text="This is a unconstrainted banner"
        type="danger"
        duration="sticky"
        fullWidth
        onExit={() => { }}
      />
      <Typography.Heading>With Knobs</Typography.Heading>
      <Banner
        text={text('text', 'This is an banner')}
        type={select('type', ['success', 'info', 'danger'], 'info')}
        duration='sticky'
        onExit={action('banner exited')}
      />
    </React.Fragment>
  ))
);
