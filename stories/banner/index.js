import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import BannerReadme from 'docs/banner.md';
import { Banner, Typography } from 'src/shared-components';

const stories = storiesOf('Banner', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(BannerReadme, () => (
    <React.Fragment>
      <Typography.Heading>With Knobs</Typography.Heading>
      <Banner
        content={<div>This is a banner <a href="#">something</a></div>}
        type={select('type', ['success', 'info', 'danger'], 'info')}
        onClick={action('clicked')}
      />
    </React.Fragment >
  ))
);
