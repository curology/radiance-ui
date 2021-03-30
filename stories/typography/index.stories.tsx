import React from 'react';
import {
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Typography } from 'src/shared-components';
import type { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';

export const Usage = () => (
  <React.Fragment>
    <Typography.Display>Display</Typography.Display>
    <Typography.Heading>Heading</Typography.Heading>
    <Typography.Title>Title</Typography.Title>
    <Typography.Bold>Body Bold</Typography.Bold>
    <p>Body</p>
    <Typography.Caption>Caption</Typography.Caption>
    <Typography.Label>Label</Typography.Label>
    <Typography.Error>Error</Typography.Error>
    <Typography.Success>Success</Typography.Success>
    <div>
      <Typography.Link>Link</Typography.Link>
    </div>
    <Typography.Button>Button</Typography.Button>
  </React.Fragment>
);

Usage.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

const sourceCode = `<Typography.Display css={(theme) => emotionSerializedStyleValueWithTheme(theme)}>Override!</Typography.Display>`;

const TYPOGRAPHY_STORIES: Meta = {
  title: 'Components/Typography',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description>
            These are the base typography styles and can be overridden only if
            the designs specify that we do. In order to override the style, use
            the `css` prop or use `TYPOGRAPHY_STYLE` with a css prop:
          </Description>
          <Source language="tsx" code={sourceCode} />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Typography } from 'radiance-ui';"}
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default TYPOGRAPHY_STORIES;
