import React from 'react';
import { css } from '@emotion/core';
import { Accordion } from 'src/shared-components';

export interface AccordionsStateType {
  [x: string]: boolean;
}

class DefaultAccordion extends React.Component<{}, AccordionsStateType> {
  state: AccordionsStateType = {
    accordion1: false,
    accordion2: false,
    accordion3: false,
    accordion4: false,
  };

  toggleAccordion = (accordion: string): void => {
    this.setState(state => ({ [accordion]: !state[accordion] }));
  };

  render(): JSX.Element {
    const { accordion1, accordion2, accordion3, accordion4 } = this.state;

    return (
      <div
        css={css`
          width: 400px;
        `}
      >
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                This is styled with Accordion.Content
              </Accordion.Content>
            }
            isOpen={accordion1}
            onClick={(): void => this.toggleAccordion('accordion1')}
          >
            <Accordion.Content>
              Accordion.Content adds standard accordion padding.
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
            isOpen={accordion2}
            onClick={(): void => this.toggleAccordion('accordion2')}
            noBorder
          >
            <Accordion.Content>
              This is styled with Accordion.Content
            </Accordion.Content>
          </Accordion>
        </Accordion.Container>
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                This is a disabled accordion
              </Accordion.Content>
            }
            isOpen={accordion3}
            onClick={(): void => this.toggleAccordion('accordion3')}
            disabled
          >
            <Accordion.Content>Expandable</Accordion.Content>
          </Accordion>
        </Accordion.Container>
        <Accordion.Container>
          <Accordion
            title={
              <Accordion.Content>
                This is a right aligned arrow
              </Accordion.Content>
            }
            isOpen={accordion4}
            onClick={(): void => this.toggleAccordion('accordion4')}
            rightAlignArrow
          >
            <Accordion.Content>Expandable</Accordion.Content>
          </Accordion>
        </Accordion.Container>
      </div>
    );
  }
}

export default DefaultAccordion;
