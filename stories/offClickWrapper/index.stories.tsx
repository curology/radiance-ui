import React, { useState } from 'react';
import { OffClickWrapper, Container } from 'src/shared-components';
import {
  Title,
  Primary,
  ArgsTable,
  Description,
  Heading,
  Source,
} from '@storybook/addon-docs/blocks';

export const Usage = () => {
  const [text, setText] = useState(
    'Click outside this container to call the onOffClick handler...',
  );

  const handleOffClick = () => setText('You clicked outside the container!!!');

  return (
    <OffClickWrapper onOffClick={handleOffClick}>
      <Container type="message">
        <Container.Section>{text}</Container.Section>
      </Container>
    </OffClickWrapper>
  );
};

export default {
  title: 'Components/OffClickWrapper',
  component: OffClickWrapper,
  parameters: {
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
          <Primary />
          <ArgsTable />
        </React.Fragment>
      ),
    },
  },
};
