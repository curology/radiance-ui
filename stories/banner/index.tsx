import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import BannerReadme from 'docs/banner';
import { Banner, Typography } from 'src/shared-components';

const stories = storiesOf('Banner', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(BannerReadme, () => (
    <React.Fragment>
      <Banner
        content={
          <React.Fragment>
            <strong>Default banner:</strong> This is the banner content
          </React.Fragment>
        }
      />
      <Banner
        content={
          <React.Fragment>
            <strong>Success banner:</strong> This is the banner content
          </React.Fragment>
        }
        type="success"
      />
      <Banner
        content={
          <React.Fragment>
            <strong>Error Banner:</strong> This is the banner content
          </React.Fragment>
        }
        type="error"
      />
      <Typography.Heading>With Knobs</Typography.Heading>
      <Banner
        type={select('type', ['default', 'success', 'error'], 'default')}
        content={text('content', 'This is the banner content')}
      />
    </React.Fragment>
  )),
);
