import React from 'react';
import { withDocs } from 'storybook-readme';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import LinkButtonReadme from 'docs/button/linkButton';
import { LinkButton } from 'src/shared-components';
import { COLORS } from 'src/constants';

import Container from '../container';

// Mock React-Router Link
const MockLink = ({
  to,
  children,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
  rest: { [key: string]: unknown };
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <a href={to} {...rest}>
    {children}
  </a>
);

const LinkButtonStory = withDocs(LinkButtonReadme, () => (
  <React.Fragment>
    <Container title="LinkButton">
      <LinkButton href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1">
        Primary
      </LinkButton>
      <LinkButton buttonType="secondary">Secondary</LinkButton>
      <LinkButton buttonType="tertiary">Tertiary</LinkButton>
      <LinkButton buttonType="quaternary">Quaternary</LinkButton>
      <LinkButton disabled>Disabled</LinkButton>
    </Container>

    <Container title="Using React Router Link">
      <LinkButton
        to="https://www.google.com/search?q=chem+trails"
        as={MockLink}
      >
        Router Link
      </LinkButton>
    </Container>

    <Container title="With Color">
      <LinkButton
        buttonColor={COLORS.statusRed}
        href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1"
      >
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
    </Container>

    <Container title="with Knobs">
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
    </Container>
  </React.Fragment>
));

export default LinkButtonStory;