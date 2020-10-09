import React from 'react';
import { Typography } from 'src/shared-components';
import {
  Title,
  Primary,
  Description,
  Source,
  Heading,
} from '@storybook/addon-docs/blocks';

export const Usage = () => (
  <React.Fragment>
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
  </React.Fragment>
);

const sourceCode = `<Typography.Display css={emotionSerializedStyleValue}>Override!</Typography.Display>`;

export default {
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
          <Primary />
        </React.Fragment>
      ),
    },
  },
};
