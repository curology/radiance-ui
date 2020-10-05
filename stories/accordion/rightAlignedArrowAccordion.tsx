import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

const RightAlignedArrowAccordion = () => {
  const [showContent, setShowContent] = useState(false);
  const toggleAccordion = () => setShowContent(!showContent);

  return (
    <Accordion.Container>
      <Accordion
        title={
          <Accordion.Content>This is a right aligned arrow</Accordion.Content>
        }
        isOpen={showContent}
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

export default RightAlignedArrowAccordion;
