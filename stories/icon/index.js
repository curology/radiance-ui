import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import IconReadme from 'docs/icon.md';
import { Icon, Typography } from 'src/shared-components';
import { COLORS, SPACING } from 'src/constants';

import LoadIcons from './LoadIcons';
import IconList from './IconList';

const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(IconReadme, () => (
    <React.Fragment>
      <Icon width={14} height={14} iconName="camera" />
      <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <Icon
        iconName={text('Icon Id', 'camera')}
        width={number('width', 15)}
        height={number('height', 15)}
        fill={text('Icon fill color', COLORS.primary)}
        inline={boolean('inline display option', false)}
        rotate={number('Rotation degrees', 0)}
        className={text('additional css class names', '')}
        duskId={text('dusk id for integration testing', '')}
      />
    </React.Fragment>
  ))
);

// Asynchronously read svg sprite file and
// render the icons. Currently using method
// described in this GH issue:
// https://github.com/storybooks/storybook/issues/696
stories.add('Icon Library', () => (
  <LoadIcons>{icons => <IconList icons={icons} />}</LoadIcons>
));

