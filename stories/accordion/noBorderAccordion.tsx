import React from 'react';

import { Accordion } from 'src/shared-components';

import { useAccordionState } from './utils';

const AccordionNoBorder = () => {
  const { isOpen, onClick } = useAccordionState();

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

export default AccordionNoBorder;
