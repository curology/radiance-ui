import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

export const RightAlignedArrowAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is a right aligned arrow</Accordion.Content>
        }
        isOpen={isOpen}
        onClick={toggleAccordion}
        rightAlignArrow
      >
        <Accordion.Content>
          Accordion.Content adds standard accordion padding.
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};
