import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Callout } from 'src/shared-components';
import { text, boolean } from '@storybook/addon-knobs';
import { BREAKPOINTS } from 'src/constants';
import type { Meta } from '@storybook/react';

import { LockGlyph, NeckGlyph, NoneGlyph } from '../../src/icons';

export const Usage = () => (
  <React.Fragment>
    <Callout.Container>
      <Callout>
        Simple callout with <strong>bolded text</strong>
      </Callout>
    </Callout.Container>
    <br />
    <Callout.Container>
      <Callout type="success" icon={<LockGlyph />}>
        Your photos are private and are used by your provider to treat your skin
      </Callout>
    </Callout.Container>
    <br />
    <Callout.Container>
      <Callout type="error" icon={<NoneGlyph />}>
        <strong>Oops</strong>
        <br />
        Something is wrong with this page
      </Callout>
    </Callout.Container>
  </React.Fragment>
);

export const WithIcon = () => (
  <Callout.Container>
    <Callout icon={<NeckGlyph />}>
      <strong>We recommend</strong> this bundle because you indicated concern
      about <strong>dry skin</strong> and <strong>body acne</strong>
    </Callout>
  </Callout.Container>
);

export const WithoutContainer = () => (
  <Callout>
    This Callout will strech 100% the width of the parent container.
  </Callout>
);

WithoutContainer.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs, BREAKPOINTS.md] },
};

export const WithControls = () => (
  <Callout icon={boolean('With Icon', true) ? <NeckGlyph /> : null}>
    {text(
      'text',
      'We recommend this bundle because you indicated concern about dry skin and body acne',
    )}
  </Callout>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

const CHROMATIC_OPTIONS = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
} as const;
interface CalloutStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const CALLOUT_STORIES: CalloutStories = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    ...CHROMATIC_OPTIONS,
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Callout } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default CALLOUT_STORIES;
