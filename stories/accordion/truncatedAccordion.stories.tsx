import React, { useState } from 'react';
import { Accordion } from 'src/shared-components';

export const TruncatedAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <div style={{ width: '400px' }}>
      <Accordion.Container>
        <Accordion
          title={
            <Accordion.Content>
              <Accordion.Truncate>
                This uses Accordion.Truncate to shorten long text.
              </Accordion.Truncate>
            </Accordion.Content>
          }
          isOpen={isOpen}
          onClick={onClick}
        >
          <Accordion.Content>
            Accordion.Truncate is a wrapper that will cut off any text (direct
            children only) with an added ellipsis and prevents line wrapping.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
    </div>
  );
};
