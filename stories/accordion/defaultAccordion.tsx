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

  toggleAccordion = (accordion: string) => {
    this.setState((state) => ({ [accordion]: !state[accordion] }));
  };

  render(): JSX.Element {
    const { accordion1, accordion2, accordion3, accordion4 } = this.state;

    return (
      <div
        css={css`
          width: 400px;
        `}
      >
        <Accordion
          title={
            <Accordion.Content>
              This is styled with Accordion.Content
            </Accordion.Content>
          }
          isOpen={accordion1}
          onClick={() => this.toggleAccordion('accordion1')}
          withContainer
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>

        <Accordion
          title={
            <Accordion.Content>
              This is Accordion with noBorder
            </Accordion.Content>
          }
          isOpen={accordion2}
          onClick={() => this.toggleAccordion('accordion2')}
          noBorder
          withContainer
        >
          <Accordion.Content>
            This is styled with Accordion.Content
          </Accordion.Content>
        </Accordion>

        <Accordion
          title={
            <Accordion.Content>This is a disabled accordion</Accordion.Content>
          }
          isOpen={accordion3}
          onClick={() => this.toggleAccordion('accordion3')}
          disabled
          withContainer
        >
          <Accordion.Content>Expandable</Accordion.Content>
        </Accordion>

        <Accordion
          title={
            <Accordion.Content>This is a right aligned arrow</Accordion.Content>
          }
          isOpen={accordion4}
          onClick={() => this.toggleAccordion('accordion4')}
          rightAlignArrow
          withContainer
        >
          <Accordion.Content>Expandable</Accordion.Content>
          <Accordion.Content>Expandable #2</Accordion.Content>
          <Accordion.Content>Expandable #3</Accordion.Content>
        </Accordion>
      </div>
    );
  }
}

export default DefaultAccordion;
