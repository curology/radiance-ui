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
import { CheckmarkIcon } from 'src/svgs/icons';
import type { Meta } from '@storybook/react';
import { ThemeColors } from 'src/constants/themes/types';
import { useTheme } from 'emotion-theming';

const noop = () => undefined;

export const Default = () => (
  <Button.Container>
    <Button onClick={noop}>Primary Button</Button>
    <Button onClick={noop} buttonType="secondary">
      Secondary Button
    </Button>
    <Button onClick={noop} buttonType="tertiary">
      Tertiary Button
    </Button>
    <Button onClick={noop} buttonType="quaternary">
      Quaternary Button
    </Button>
    <Button onClick={noop} disabled>
      Disabled Button
    </Button>
    <Button onClick={noop} isFullWidth>
      Full Width Button
    </Button>
    <Button onClick={noop} isLoading>
      Primary Loading
    </Button>
    <Button onClick={noop} isLoading buttonType="secondary">
      Secondary Loading
    </Button>
    <Button onClick={noop} buttonType="tertiary" isLoading>
      Tertiary Loading
    </Button>
    <Button onClick={noop} buttonType="quaternary" isLoading>
      Quaternary Loading
    </Button>
    <Button onClick={noop} isFullWidth isLoading>
      Full Width Loading
    </Button>
  </Button.Container>
);

export const WithIcon = () => (
  <Button.Container>
    <Button onClick={noop} icon={<CheckmarkIcon />}>
      Primary Button
    </Button>
    <Button onClick={noop} buttonType="secondary" icon={<CheckmarkIcon />}>
      Secondary Button
    </Button>
    <Button onClick={noop} buttonType="tertiary" icon={<CheckmarkIcon />}>
      Tertiary Button
    </Button>
    <Button onClick={noop} buttonType="quaternary" icon={<CheckmarkIcon />}>
      Quaternary Button
    </Button>
    <Button onClick={noop} disabled icon={<CheckmarkIcon />}>
      Disabled Button
    </Button>
    <Button onClick={noop} isFullWidth icon={<CheckmarkIcon />}>
      Full Width Button
    </Button>
    <Button onClick={noop} isLoading icon={<CheckmarkIcon />}>
      Primary Loading
    </Button>
    <Button
      onClick={noop}
      isLoading
      buttonType="secondary"
      icon={<CheckmarkIcon />}
    >
      Secondary Loading
    </Button>
    <Button
      onClick={noop}
      isLoading
      buttonType="tertiary"
      icon={<CheckmarkIcon />}
    >
      Tertiary Loading
    </Button>
    <Button
      onClick={noop}
      isLoading
      buttonType="quaternary"
      icon={<CheckmarkIcon />}
    >
      Quaternary Loading
    </Button>
    <Button onClick={noop} isLoading isFullWidth icon={<CheckmarkIcon />}>
      Full Width Loading
    </Button>
  </Button.Container>
);

export const WithColor = () => {
  const theme = useTheme();

  return (
    <Button.Container>
      <Button onClick={noop} buttonColor={theme.COLORS.error}>
        Primary Button
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        buttonType="secondary"
      >
        Secondary Button
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        buttonType="tertiary"
      >
        Tertiary Button
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        buttonType="quaternary"
      >
        Quaternary Button
      </Button>
      <Button onClick={noop} buttonColor={theme.COLORS.error} disabled>
        Disabled Button
      </Button>
      <Button onClick={noop} buttonColor={theme.COLORS.error} isFullWidth>
        Full Width Button
      </Button>
      <Button onClick={noop} buttonColor={theme.COLORS.error} isLoading>
        Primary Loading
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        isLoading
        buttonType="secondary"
      >
        Secondary Loading
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        buttonType="tertiary"
        isLoading
      >
        Tertiary Loading
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        buttonType="quaternary"
        isLoading
      >
        Quaternary Loading
      </Button>
      <Button
        onClick={noop}
        buttonColor={theme.COLORS.error}
        isFullWidth
        isLoading
      >
        Full Width Loading
      </Button>
    </Button.Container>
  );
};

export const WithControls = () => {
  const theme = useTheme();

  return (
    <Button.Container>
      <Button
        buttonType={select(
          'buttonType',
          ['primary', 'secondary', 'tertiary', 'quaternary'],
          'primary',
        )}
        buttonColor={select('buttonColor', theme.COLORS, theme.COLORS.primary)}
        isLoading={boolean('isLoading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
        textColor={text('textColor', '') as ThemeColors}
      >
        {text('children', 'Click me!')}
      </Button>
    </Button.Container>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

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
