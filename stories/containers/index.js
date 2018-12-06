import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ContainerReadme from 'docs/containers/container.md';
import ClickableContainerReadme from 'docs/containers/clickableContainer.md';
import MessageContainerReadme from 'docs/containers/messageContainer.md';
import { Container, ClickableContainer, MessageContainer } from 'src/shared-components';

const stories = storiesOf('Containers', module);

stories.addDecorator(withKnobs);

stories.add(
  'Container',
  withDocs(ContainerReadme, () => (
    <React.Fragment>
      <Container>
        <Container.Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
          height="134"
        />
        <Container.Section>
          First section!
        </Container.Section>
        <Container.Divider />

        <Container.Section>
          Second section
        </Container.Section>
      </Container>
    </React.Fragment>
  ))
);

stories.add(
  'ClickableContainer',
  withDocs(ClickableContainerReadme, () => (
    <React.Fragment>
      <ClickableContainer>
        <ClickableContainer.Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
          height="134"
        />
        <ClickableContainer.Section>
          First section!
        </ClickableContainer.Section>
        <ClickableContainer.Divider />

        <ClickableContainer.Section>
          Second section
        </ClickableContainer.Section>
      </ClickableContainer>
    </React.Fragment>
  ))
);

stories.add(
  'MessageContainer',
  withDocs(MessageContainerReadme, () => (
    <React.Fragment>
      <MessageContainer>
        <MessageContainer.Image
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
          height="134"
        />
        <MessageContainer.Section>
          First section!
        </MessageContainer.Section>
        <MessageContainer.Divider />

        <MessageContainer.Section>
          Second section
        </MessageContainer.Section>
      </MessageContainer>
    </React.Fragment>
  ))
);
