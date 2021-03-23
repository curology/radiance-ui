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
import { LinkButton } from 'src/shared-components';
import type { Meta } from '@storybook/react';
import { ThemeColors } from 'src/constants/themes/types';
import { useTheme } from 'emotion-theming';

export const Default = () => (
  <LinkButton.Container>
    <LinkButton href="https://www.curology.com">Primary</LinkButton>
    <LinkButton buttonType="secondary">Secondary</LinkButton>
    <LinkButton buttonType="tertiary">Tertiary</LinkButton>
    <LinkButton buttonType="quaternary">Quaternary</LinkButton>
    <LinkButton disabled>Disabled</LinkButton>
  </LinkButton.Container>
);

export const ReactRouterLink = () => {
  const MockLink = ({
    children,
    to,
    ...rest
  }: {
    children: React.ReactNode;
    to: string;
  }) => (
    // eslint-disable-next-line
    <a href={to} {...rest}>
      {children}
    </a>
  );

  return (
    <LinkButton.Container>
      <LinkButton
        to="https://www.google.com/search?q=react+router+link"
        as={MockLink}
      >
        Router Link
      </LinkButton>
    </LinkButton.Container>
  );
};

export const WithColor = () => {
  const theme = useTheme();

  return (
    <LinkButton.Container>
      <LinkButton
        buttonColor={theme.COLORS.error}
        href="https://www.curology.com"
      >
        Primary
      </LinkButton>
      <LinkButton buttonColor={theme.COLORS.error} buttonType="secondary">
        Secondary
      </LinkButton>
      <LinkButton buttonColor={theme.COLORS.error} buttonType="tertiary">
        Tertiary
      </LinkButton>
      <LinkButton buttonColor={theme.COLORS.error} buttonType="quaternary">
        Quaternary
      </LinkButton>
      <LinkButton buttonColor={theme.COLORS.error} disabled>
        Disabled
      </LinkButton>
    </LinkButton.Container>
  );
};

export const WithControls = () => {
  const theme = useTheme();

  return (
    <LinkButton.Container>
      <LinkButton
        buttonType={select(
          'buttonType',
          ['primary', 'secondary', 'tertiary', 'quaternary'],
          'primary',
        )}
        buttonColor={select('buttonColor', theme.COLORS, theme.COLORS.primary)}
        disabled={boolean('disabled', false)}
        onClick={action('You clicked a button')}
        textColor={text('textColor', '') as ThemeColors}
      >
        {text('children', 'Click it!')}
      </LinkButton>
    </LinkButton.Container>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

const LINK_BUTTON_STORIES: Meta = {
  title: 'Components/Button/LinkButton',
  component: LinkButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { LinkButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default LINK_BUTTON_STORIES;
