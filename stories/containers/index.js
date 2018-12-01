import React from 'react';
import { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ContainerReadme from 'docs/container.md';
import { Container } from 'src/shared-components';
import { SPACING } from 'src/constants';

const addedStyles = css`
  margin-bottom: ${SPACING.base};
  padding: ${SPACING.large};
  text-align: center;
`;

const stories = storiesOf('Container', module);

stories.addDecorator(withKnobs);

stories.add(
  'Usage',
  withDocs(ContainerReadme, () => (
    <React.Fragment>
      <Container css={addedStyles}>
        Default Container
      </Container>
      <Container.Clickable css={addedStyles}>
        Clickable Container
      </Container.Clickable>
      <Container.Message css={addedStyles}>
        Message Container
      </Container.Message>
    </React.Fragment>
  ))
);

