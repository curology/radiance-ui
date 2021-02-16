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
import { useTheme } from 'emotion-theming';

import { LockGlyph, NeckGlyph } from '../../src/icons';

export const Default = () => (
  <Callout.Container>
    <Callout>
      Simple callout with <strong>bolded text</strong>
    </Callout>
  </Callout.Container>
);

export const WithColor = () => {
  const theme = useTheme();

  return (
    <Callout.Container>
      <Callout color={theme.COLORS.primaryTint2}>
        Callout with a <strong>custom color</strong>
      </Callout>
    </Callout.Container>
  );
};

export const WithIcon = () => (
  <Callout.Container>
    <Callout icon={<NeckGlyph />}>
      <strong>We recommend</strong> this bundle because you indicated concern
      about <strong>dry skin</strong> and <strong>body acne</strong>
    </Callout>
  </Callout.Container>
);

export const SuccessCallout = () => (
  <Callout.Container>
    <Callout type="success" icon={<LockGlyph />}>
      Your photos are private and are used by your provider to treat your skin
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
