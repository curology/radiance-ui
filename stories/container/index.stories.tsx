import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { Container } from 'src/shared-components';

import type { ContainerType } from 'src/shared-components/container/style';
import type { Meta } from '@storybook/react';

export const Default = () => (
  <Container>
    <Container.Image
      src="https://images-na.ssl-images-amazon.com/images/I/61E0pFPOl7L._SL1500_.jpg"
      height="134"
    />
    <Container.Section>First section!</Container.Section>
    <Container.Divider />
    <Container.Section>Second section</Container.Section>
  </Container>
);

export const Clickable = () => (
  <Container type="clickable">
    <Container.Section>Clickable container</Container.Section>
  </Container>
);

export const Message = () => (
  <Container type="message">
    <Container.Section>Message container</Container.Section>
  </Container>
);

/**
 * Since Container is just a styled component export, we can't infer the type information
 * of the component the way we can typical React components.
 *
 * By importing ContainerType into it's usage we can raise TypeScript errors should the
 * Container API change in the future.
 */
/**
 * The `<Container />` component is mainly useful for base styles.
 *
 * Within the container there are helper components that have very little opinion except for spacing. The idea is that we encourage you to build out the content of the `<Container />` component, but we have some helpful default components you can use.
 *
 * `<Container />` can take in a `type` prop that will change its styling. Available types are `message` and `clickable`.
 */
export const MockContainer = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: ContainerType;
}) => <Container type={type}>{children}</Container>;

MockContainer.parameters = {
  chromatic: { disable: true },
};

const CONTAINER_STORIES: Meta = {
  title: 'Components/Container',
  component: MockContainer,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description of={MockContainer} />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Container } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable of={MockContainer} />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
  excludeStories: [MockContainer.name],
};

export default CONTAINER_STORIES;
