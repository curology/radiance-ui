import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ContainerReadme from 'docs/container.md';
import { Container } from 'src/shared-components';

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

      <br />
      <br />
      <Container type="clickable">
        <Container.Section>
          Clickable container
        </Container.Section>
      </Container>

      <br />
      <br />
      <Container type="message">
        <Container.Section>
          Message container
        </Container.Section>
      </Container>
    </React.Fragment>
  ))
);
