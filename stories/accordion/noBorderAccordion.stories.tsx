import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

export const NoBorderAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is Accordion with noBorder</Accordion.Content>
        }
        noBorder
        isOpen={isOpen}
        onClick={onClick}
      >
        <Accordion.Content>
          This is styled with Accordion.Content
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};
