import React from 'react';
import {
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { TYPOGRAPHY_STYLE } from 'src/shared-components';
import type { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';

// Rule will be fixed with emotion 11 upgrade that has better typing,
// but right now the css theme arg is any in `/stories` directory
/* eslint-disable @typescript-eslint/no-unsafe-argument */
export const Usage = () => (
  <React.Fragment>
    <div css={(theme) => TYPOGRAPHY_STYLE.display(theme)}>display</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.heading(theme)}>heading</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.title(theme)}>title</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.bodyBold(theme)}>body bold</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.body(theme)}>body</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.caption(theme)}>caption</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.label(theme)}>label</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.error(theme)}>error</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.success(theme)}>success</div>
    <div>
      <span css={TYPOGRAPHY_STYLE.link}>link</span>
    </div>
    <div css={(theme) => TYPOGRAPHY_STYLE.button(theme)}>button</div>
  </React.Fragment>
);
/* eslint-enable @typescript-eslint/no-unsafe-argument */

Usage.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

const TYPOGRAPHY_STYLE_STORIES: Meta = {
  title: 'Components/TYPOGRAPHY_STYLE',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description>
            This import is meant to be used to pull in css of the base
            typography styles and used in composing Emotion components.
          </Description>
          <Description>
            These are not React components. They are Emotion css styles that can
            be used to compose the exact style the design calls for.
          </Description>
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { TYPOGRAPHY_STYLE } from 'radiance-ui';"}
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default TYPOGRAPHY_STYLE_STORIES;
