import React, { useState } from 'react';
import { OffClickWrapper, Container } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import type { Meta } from '@storybook/react';

export const Usage = () => {
  const [text, setText] = useState(
    'Click outside this container to call the onOffClick handler...',
  );

  const handleOffClick = () => {
    setText('You clicked outside the container!!!');
  };

  return (
    <OffClickWrapper onOffClick={handleOffClick}>
      <Container type="message">
        <Container.Section>{text}</Container.Section>
      </Container>
    </OffClickWrapper>
  );
};

const CHROMATIC_OPTIONS = { chromatic: { disable: true } } as const;

interface OffClickWrapperStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
}

const OFF_CLICK_WRAPPER_STORIES: OffClickWrapperStories = {
  title: 'Components/OffClickWrapper',
  component: OffClickWrapper,
  parameters: {
    ...CHROMATIC_OPTIONS,
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { OffClickWrapper } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default OFF_CLICK_WRAPPER_STORIES;
