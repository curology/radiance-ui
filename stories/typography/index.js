import React from 'react';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { css } from '@emotion/core';

import TypographyReadme from 'docs/typography.md';
import { SPACING } from 'src/constants';
import { Typography } from 'src/shared-components';

const stories = storiesOf('Typography', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(TypographyReadme, () => (
    <React.Fragment>
      <div css={css`text-align: left`}>
        <Typography.Display>Display</Typography.Display>
        <Typography.Heading>Heading</Typography.Heading>
        <Typography.Title>Title</Typography.Title>
        <p>Body</p>
        <Typography.Caption>Caption</Typography.Caption>
        <Typography.Label>Label</Typography.Label>
        <Typography.Error>Error</Typography.Error>
        <Typography.Success>Success</Typography.Success>
        <div>
          <Typography.Link>Link</Typography.Link>
        </div>
        <Typography.Button>Button</Typography.Button>
      </div>
      <div css={css`text-align: left; padding-top: ${SPACING.small};`}>
        <Typography.Heading>With Knobs</Typography.Heading>
        <p>{text('children', 'Change me!')}</p>
      </div>
    </React.Fragment>
  ))
);
