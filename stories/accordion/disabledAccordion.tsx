import React from 'react';
import { Accordion } from 'src/shared-components';

import { useAccordionState } from './utils';

const DisabledAccordion = () => {
  const { isOpen, onClick } = useAccordionState();

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

export default DisabledAccordion;
