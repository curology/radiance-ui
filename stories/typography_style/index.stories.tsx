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
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.display(cssTheme)}>display</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.heading(cssTheme)}>heading</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.title(cssTheme)}>title</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.bodyBold(cssTheme)}>body bold</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.body(cssTheme)}>body</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.caption(cssTheme)}>caption</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.label(cssTheme)}>label</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.error(cssTheme)}>error</div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.success(cssTheme)}>success</div>
    <div>
      <span css={TYPOGRAPHY_STYLE.link}>link</span>
    </div>
    <div css={(cssTheme) => TYPOGRAPHY_STYLE.button(cssTheme)}>button</div>
  </React.Fragment>
);

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
