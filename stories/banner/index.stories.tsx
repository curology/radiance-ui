import React from 'react';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import { Banner } from 'src/shared-components';
import { select, text } from '@storybook/addon-knobs';

export const Default = () => (
  <Banner
    content={
      <React.Fragment>
        <strong>Default banner:</strong> This is the banner content
      </React.Fragment>
    }
  />
);

export const Clickable = () => (
  <Banner
    onClick={() => alert('clicked!')}
    content={
      <React.Fragment>
        <strong>Clickable banner</strong> This is a banner with an onClick prop
      </React.Fragment>
    }
  />
);

export const Success = () => (
  <Banner
    content={
      <React.Fragment>
        <strong>Success banner:</strong> This is the banner content
      </React.Fragment>
    }
    type="success"
  />
);

export const Error = () => (
  <Banner
    content={
      <React.Fragment>
        <strong>Error Banner:</strong> This is the banner content
      </React.Fragment>
    }
    type="error"
  />
);

export const WithControls = () => (
  <Banner
    type={select('type', ['default', 'success', 'error'], 'default')}
    content={text('content', 'This is the banner content')}
  />
);

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Banner } from 'radiance-ui';"}
          />
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
