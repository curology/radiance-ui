import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

export const DisabledAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is a disabled accordion</Accordion.Content>
        }
        isOpen={isOpen}
        onClick={onClick}
        disabled
      >
        <Accordion.Content>Expandable</Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};
