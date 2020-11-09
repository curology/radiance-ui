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

export const Usage = () => (
  <React.Fragment>
    <div css={(theme) => TYPOGRAPHY_STYLE.display(theme)}>display</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.heading(theme)}>heading</div>
    <div css={(theme) => TYPOGRAPHY_STYLE.title(theme)}>title</div>
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

export default {
  title: 'Components/TYPOGRAPHY_STYLE',
  parameters: {
    chromatic: { viewports: [BREAKPOINTS.xs] },
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
} as Meta;
