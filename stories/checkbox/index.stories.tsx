import React from 'react';
import {
  Title,
  Primary as PrimaryBlock,
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import { Checkbox } from 'src/shared-components';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { AcneGlyph } from 'src/svgs/glyphs';

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

export const WithControls = () => (
  <Checkbox
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    type={select('type', ['primary', 'secondary'], 'primary')}
    onClick={action('checkbox clicked')}
    icon={
      boolean('icon', false) ? (
        <AcneGlyph width={40} height={40} fill="#332e54" />
      ) : null
    }
    size={select('size', ['large', 'small'], 'large')}
  >
    {text('children', 'Render checkbox label here')}
  </Checkbox>
);

export default {
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
          <PrimaryBlock />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
};
