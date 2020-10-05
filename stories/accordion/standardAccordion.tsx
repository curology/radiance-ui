import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

const StandardAccordion = () => {
  const [showContent, setShowContent] = useState(false);
  const toggleAccordion = () => setShowContent(!showContent);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>
            This is styled with Accordion.Content
          </Accordion.Content>
        }
        isOpen={showContent}
        onClick={toggleAccordion}
      >
        <Accordion.Content>
          Accordion.Content adds standard accordion padding.
        </Accordion.Content>
      </Accordion>
    </Accordion.Container>
  );
};

export default StandardAccordion;
