import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { Checkbox } from 'src/shared-components';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { useTheme } from '@emotion/react';
import type { Meta } from '@storybook/react';

import { AcneGlyph } from '../../src/icons';

export const Primary = () => (
  <React.Fragment>
    <Checkbox type="primary" checked>
      This is a primary checkbox
    </Checkbox>
    <Checkbox type="primary" checked={false}>
      This is an unchecked primary checkbox
    </Checkbox>
    <Checkbox type="primary" checked size="large">
      This is a large primary checkbox
    </Checkbox>
    <Checkbox type="primary" checked={false} size="large">
      This is an unchecked large primary checkbox
    </Checkbox>
  </React.Fragment>
);

export const Secondary = () => (
  <React.Fragment>
    <Checkbox type="secondary" checked>
      This is a secondary checkbox
    </Checkbox>
    <Checkbox type="secondary" checked={false}>
      This is an unchecked secondary checkbox
    </Checkbox>
    <Checkbox type="secondary" checked size="large">
      This is a large secondary checkbox
    </Checkbox>
    <Checkbox type="secondary" checked={false} size="large">
      This is an unchecked large secondary checkbox
    </Checkbox>
  </React.Fragment>
);

export const Disabled = () => (
  <React.Fragment>
    <Checkbox disabled checked>
      This is a disabled checkbox
    </Checkbox>
    <Checkbox disabled checked={false}>
      This is an unchecked disabled checkbox
    </Checkbox>
    <Checkbox disabled checked size="large">
      This is a large disabled checkbox
    </Checkbox>
    <Checkbox disabled checked={false} size="large">
      This is an unchecked large disabled checkbox
    </Checkbox>
    <Checkbox type="secondary" disabled checked>
      This is a secondary disabled checkbox
    </Checkbox>
    <Checkbox type="secondary" disabled checked={false}>
      This is an unchecked secondary disabled checkbox
    </Checkbox>
    <Checkbox type="secondary" disabled checked size="large">
      This is a large secondary disabled checkbox
    </Checkbox>
    <Checkbox type="secondary" disabled checked={false} size="large">
      This is an unchecked large secondary disabled checkbox
    </Checkbox>
  </React.Fragment>
);

export const Icon = () => (
  <React.Fragment>
    <Checkbox type="primary" checked size="small" icon={<AcneGlyph />}>
      This is a primary (small) checkbox with an icon prop.
    </Checkbox>
    <Checkbox type="primary" checked={false} size="small" icon={<AcneGlyph />}>
      This is an unchecked primary (small) checkbox with an icon prop.
    </Checkbox>
    <Checkbox type="primary" checked size="large" icon={<AcneGlyph />}>
      This is a primary (large) checkbox with an icon prop.
    </Checkbox>
    <Checkbox type="primary" checked={false} size="large" icon={<AcneGlyph />}>
      This is an unchecked primary (large) checkbox with an icon prop.
    </Checkbox>
    <Checkbox type="secondary" checked size="small" icon={<AcneGlyph />}>
      This is a secondary (small) checkbox with an icon prop.
    </Checkbox>
    <Checkbox
      type="secondary"
      checked={false}
      size="small"
      icon={<AcneGlyph />}
    >
      This is an unchecked secondary (small) checkbox with an icon prop.
    </Checkbox>
    <Checkbox type="secondary" checked size="large" icon={<AcneGlyph />}>
      This is a secondary (large) checkbox with an icon prop.
    </Checkbox>
    <Checkbox
      type="secondary"
      checked={false}
      size="large"
      icon={<AcneGlyph />}
    >
      This is an unchecked secondary (large) checkbox with an icon prop.
    </Checkbox>
  </React.Fragment>
);

export const WithControls = () => {
  const theme = useTheme();

  return (
    <Checkbox
      checked={boolean('checked', false)}
      disabled={boolean('disabled', false)}
      type={select('type', ['primary', 'secondary'], 'primary')}
      onClick={action('checkbox clicked')}
      icon={
        boolean('icon', false) ? (
          <AcneGlyph width={40} height={40} fill={theme.COLORS.primary} />
        ) : null
      }
      size={select('size', ['large', 'small'], 'large')}
    >
      {text('children', 'Render checkbox label here')}
    </Checkbox>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

interface CheckboxStories extends Meta {
  title: string;
}

const CHECKBOX_STORIES: CheckboxStories = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Checkbox } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default CHECKBOX_STORIES;
