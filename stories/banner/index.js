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
      <Banner
        text="This banner will go away automatically"
        type="success"
        allowDismiss
        duration={3}
        onClick={() => { console.log('clicking dissapearing banner') }}
      />
      <Banner
        text="This is a not dismissable banner"
        type="danger"
        fullWidth
        onClick={() => { console.log('clicking undismissable banner') }}
      />
      <Typography.Heading>With Knobs</Typography.Heading>
      <Banner
        text={text('text', 'This is an dismissable banner')}
        type={select('type', ['success', 'info', 'danger'], 'info')}
        duration='sticky'
        onClick={() => { console.log('dismissable banner exited') }}
        allowDismiss
      />
    </React.Fragment>
  ))
);
