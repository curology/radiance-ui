import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from 'src/shared-components';
import { COLORS } from 'src/constants';
import { CheckmarkIcon } from 'src/svgs/icons';
import type { Meta } from '@storybook/react';

export const Default = () => (
  <Button.Container>
    <Button>Primary Button</Button>
    <Button buttonType="secondary">Secondary Button</Button>
    <Button buttonType="tertiary">Tertiary Button</Button>
    <Button buttonType="quaternary">Quaternary Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button isFullWidth>Full Width Button</Button>
    <Button isLoading>Primary Loading</Button>
    <Button isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button isFullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>
);

export const WithIcon = () => (
  <Button.Container>
    <Button icon={<CheckmarkIcon />}>Primary Button</Button>
    <Button buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Button
    </Button>
    <Button buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Button
    </Button>
    <Button buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Button
    </Button>
    <Button disabled icon={<CheckmarkIcon />}>
      Disabled Button
    </Button>
    <Button isFullWidth icon={<CheckmarkIcon />}>
      Full Width Button
    </Button>
    <Button isLoading icon={<CheckmarkIcon />}>
      Primary Loading
    </Button>
    <Button isLoading buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Loading
    </Button>
    <Button isLoading buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Loading
    </Button>
    <Button isLoading buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Loading
    </Button>
    <Button isLoading isFullWidth icon={<CheckmarkIcon />}>
      Full Width Loading
    </Button>
  </Button.Container>
);

export const WithColor = () => (
  <Button.Container>
    <Button buttonColor={COLORS.statusRed}>Primary Button</Button>
    <Button buttonColor={COLORS.statusRed} buttonType="secondary">
      Secondary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="tertiary">
      Tertiary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="quaternary">
      Quaternary Button
    </Button>
    <Button buttonColor={COLORS.statusRed} disabled>
      Disabled Button
    </Button>
    <Button buttonColor={COLORS.statusRed} isFullWidth>
      Full Width Button
    </Button>
    <Button buttonColor={COLORS.statusRed} isLoading>
      Primary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button buttonColor={COLORS.statusRed} isFullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>
);

export const WithControls = () => (
  <Button.Container>
    <Button
      buttonType={select(
        'buttonType',
        ['primary', 'secondary', 'tertiary', 'quaternary'],
        'primary',
      )}
      buttonColor={select('buttonColor', COLORS, COLORS.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      onClick={action('button clicked')}
      textColor={text('textColor', '')}
    >
      {text('children', 'Click me!')}
    </Button>
  </Button.Container>
);

export default {
  title: 'Components/Button/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Button } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
