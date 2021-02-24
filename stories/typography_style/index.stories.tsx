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
import { useTheme } from '@emotion/react';

export const Usage = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <div css={TYPOGRAPHY_STYLE.display(theme)}>display</div>
      <div css={TYPOGRAPHY_STYLE.heading(theme)}>heading</div>
      <div css={TYPOGRAPHY_STYLE.title(theme)}>title</div>
      <div css={TYPOGRAPHY_STYLE.body(theme)}>body</div>
      <div css={TYPOGRAPHY_STYLE.caption(theme)}>caption</div>
      <div css={TYPOGRAPHY_STYLE.label(theme)}>label</div>
      <div css={TYPOGRAPHY_STYLE.error(theme)}>error</div>
      <div css={TYPOGRAPHY_STYLE.success(theme)}>success</div>
      <div>
        <span css={TYPOGRAPHY_STYLE.link}>link</span>
      </div>
      <div css={TYPOGRAPHY_STYLE.button(theme)}>button</div>
    </React.Fragment>
  );
};

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
