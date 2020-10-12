import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

export const StandardAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>
            This is styled with Accordion.Content
          </Accordion.Content>
        }
        isOpen={isOpen}
        onClick={toggleAccordion}
      >
        <Accordion.Content>
          Accordion.Content adds standard accordion padding.
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};
