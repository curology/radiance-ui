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
import { text, boolean, select } from '@storybook/addon-knobs';
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
  </React.Fragment>
);

export const Disabled = () => (
  <React.Fragment>
    <Checkbox disabled checked>
      This is a secondary checkbox
    </Checkbox>
    <Checkbox disabled checked={false}>
      This is an unchecked secondary checkbox
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

const CHECKBOX_STORIES: Meta = {
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
