import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { LinkButton } from 'src/shared-components';
import { COLORS } from 'src/constants';
import type { Meta } from '@storybook/react';

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
    to,
    children,
    ...rest
  }: {
    to: string;
    children: React.ReactNode;
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

export const WithColor = () => (
  <LinkButton.Container>
    <LinkButton buttonColor={COLORS.statusRed} href="https://www.curology.com">
      Primary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="secondary">
      Secondary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="tertiary">
      Tertiary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} buttonType="quaternary">
      Quaternary
    </LinkButton>
    <LinkButton buttonColor={COLORS.statusRed} disabled>
      Disabled
    </LinkButton>
  </LinkButton.Container>
);

export const WithControls = () => (
  <LinkButton.Container>
    <LinkButton
      buttonType={select(
        'buttonType',
        ['primary', 'secondary', 'tertiary', 'quaternary'],
        'primary',
      )}
      buttonColor={select('buttonColor', COLORS, COLORS.primary)}
      disabled={boolean('disabled', false)}
      onClick={action('You clicked a button')}
      textColor={text('textColor', '')}
    >
      {text('children', 'Click it!')}
    </LinkButton>
  </LinkButton.Container>
);
export default {
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
          <Primary />
          <ArgsTable />
          <Stories />
        </React.Fragment>
      ),
    },
  },
} as Meta;
