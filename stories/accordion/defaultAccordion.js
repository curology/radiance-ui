import React from 'react';

import { Accordion } from 'src/shared-components';

class DefaultAccordion extends React.Component {
  state = {
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  };

  toggleAccordion = accordion => {
    this.setState(state => ({ [accordion]: !state[accordion] }));
  };

  render() {
    const {
      accordion1, accordion2, accordion3, accordion4, 
    } = this.state;

    return (
      <div css="width: 400px;">
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                This is styled with Accordion.Content
              </Accordion.Content>
            }
            isOpen={accordion1}
            onClick={() => this.toggleAccordion('accordion1')}
          >
            <Accordion.Content>
              Accordion.Content adds standard accordion padding.
            </Accordion.Content>
          </Accordion>
          <Accordion
            title={
              <Accordion.Content>
                <Accordion.Truncate>
                  This uses Accordion.Truncate to shorten long text.
                </Accordion.Truncate>
              </Accordion.Content>
            }
            isOpen={accordion2}
            onClick={() => this.toggleAccordion('accordion2')}
          >
            <Accordion.Content>
              Accordion.Truncate is a wrapper that will cut off any text (direct
              children only) with an added ellipsis and prevents line wrapping.
            </Accordion.Content>
          </Accordion>
        </Accordion.Container>
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                This is Accordion with noBorder
              </Accordion.Content>
            }
            isOpen={accordion3}
            onClick={() => this.toggleAccordion('accordion3')}
            noBorder
          >
            <Accordion.Content>
              This is styled with Accordion.Content
            </Accordion.Content>
          </Accordion>
          <Accordion
            title={
              <Accordion.Content>
                This is a disabled accordion
              </Accordion.Content>
            }
            isOpen={accordion4}
            onClick={() => this.toggleAccordion('accordion4')}
            disabled
          >
            <Accordion.Content>Expandable</Accordion.Content>
          </Accordion>
        </Accordion.Container>
      </div>
    );
  }
}

export default DefaultAccordion;
