import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import TagReadme from 'docs/tag.md';
import { Tag, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';

const stories = storiesOf('Tag', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(TagReadme, () => (
    <React.Fragment>
      <div css="text-align: left;" >
        <Tag status="success" text="Success" />
        <Tag status="error" text="Error" />
        <Tag status="pending" text="Pending" />
        <Tag status="closed" text="Closed" />
        <Typography.Heading css={`padding: ${SPACING.base} 0 ${SPACING.small};`}>
          With Knobs
        </Typography.Heading>
        <Tag
          status={select('status', ['success', 'error', 'pending', 'closed'], 'error')}
          text={text('text', 'WHOOPS!')}
        />
      </div>
    </React.Fragment>
  ))
);


