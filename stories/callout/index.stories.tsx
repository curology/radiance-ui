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
import { NeckGlyph } from 'src/svgs/glyphs';
import { BREAKPOINTS, COLORS } from 'src/constants';
import type { Meta } from '@storybook/react';

export const Default = () => (
  <Callout.Container>
    <Callout>
      Simple callout with <strong>bolded text</strong>
    </Callout>
  </Callout.Container>
);

export const WithColor = () => (
  <Callout.Container>
    <Callout color={COLORS.primaryTint2}>
      Callout with a <strong>custom color</strong>
    </Callout>
  </Callout.Container>
);

export const WithIcon = () => (
  <Callout.Container>
    <Callout icon={<NeckGlyph width={48} height={48} />}>
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
  <Callout
    icon={
      boolean('With Icon', true) ? <NeckGlyph width={48} height={48} /> : null
    }
  >
    {text(
      'text',
      'We recommend this bundle because you indicated concern about dry skin and body acne',
    )}
  </Callout>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    chromatic: { viewports: [BREAKPOINTS.xs] },
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
} as Meta;
