import React, { useState } from 'react';
import { OffClickWrapper, Container } from 'src/shared-components';

export const Default = () => {
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
