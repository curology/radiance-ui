import React from 'react';
import { withDocs } from 'storybook-readme';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import LinkButtonReadme from 'docs/button/linkButton.md';
import { LinkButton } from 'src/shared-components';
import { COLORS } from 'src/constants';

import Container from '../container';

// Mock React-Router Link
const MockLink = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
);

const LinkButtonStory = withDocs(LinkButtonReadme, () => (
  <React.Fragment>
    <Container title="LinkButton">
      <LinkButton href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1">Primary</LinkButton>
      <LinkButton buttonType="secondary">Secondary</LinkButton>
      <LinkButton buttonType="tertiary">Tertiary</LinkButton>
      <LinkButton buttonType="quaternary">Quaternary</LinkButton>
      <LinkButton disabled>Disabled</LinkButton>
    </Container>

    <Container title="LinkButton Color">
      <LinkButton color="statusRed" href="https://www.latlmes.com/arts/return-of-the-golden-age-of-comics-1">Primary Color</LinkButton>
      <LinkButton color="statusRed" buttonType="secondary">Secondary Color</LinkButton>
      <LinkButton color="statusRed" buttonType="tertiary">Tertiary Color</LinkButton>
      <LinkButton color="statusRed" buttonType="quaternary">Quaternary Color</LinkButton>
    </Container>

    <Container title="Using React Router Link">
      <LinkButton to="https://www.google.com/search?q=chem+trails" as={MockLink}>Router Link</LinkButton>
    </Container>

    <Container title="with Knobs">
      <LinkButton
        buttonType={select('buttonType', ['primary', 'secondary', 'tertiary', 'quaternary'], 'primary')}
        color={select('color', Object.keys(COLORS).sort(), 'purple')}
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