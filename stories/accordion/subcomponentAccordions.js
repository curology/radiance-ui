import React from 'react';
import { css } from '@emotion/core';
import { Accordion } from 'src/shared-components';

class DefaultAccordion extends React.Component {
  state = {
    accordion1: false,
    accordion2: false,
    accordion3: false,
  };

  toggleAccordion = accordion => {
    this.setState(state => ({ [accordion]: !state[accordion] }));
  };

  render() {
    const { accordion1, accordion2, accordion3 } = this.state;

    return (
      <div
        css={css`
          width: 400px;
        `}
      >
        <div
          css={css`
            margin: 1rem;
          `}
        >
          <Accordion.Container>
            <Accordion
              title={
                <Accordion.Content>
                  This Accordion styled with an Accordion.Container parent
                  component
                </Accordion.Content>
              }
              isOpen={accordion1}
              onClick={() => this.toggleAccordion('accordion1')}
            >
              <Accordion.Content>
                This Accordion styled with an Accordion.Container parent
                component
              </Accordion.Content>
            </Accordion>
          </Accordion.Container>
        </div>
        <div
          css={css`
            margin: 1rem;
          `}
        >
          <Accordion
            title={<span>This is an accordion with no Content usage.</span>}
            isOpen={accordion2}
            onClick={() => this.toggleAccordion('accordion2')}
          >
            The others use it because it is standard.
          </Accordion>
        </div>
        <div
          css={css`
            margin: 1rem;
          `}
        >
          <Accordion
            title={
              <Accordion.Content>
                <Accordion.Truncate>
                  This uses Accordion.Truncate to shorten long text.
                </Accordion.Truncate>
              </Accordion.Content>
            }
            isOpen={accordion3}
            onClick={() => this.toggleAccordion('accordion3')}
          >
            <Accordion.Content>
              Accordion.Truncate is a wrapper that will cut off any text (direct
              children only) with an added ellipsis and prevents line wrapping.
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default DefaultAccordion;
