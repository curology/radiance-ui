import React, { useState } from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Primary,
  Source,
  Title,
  Anchor,
  Canvas,
  Story,
} from '@storybook/addon-docs/blocks';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Accordion } from 'src/shared-components';
import type { Meta } from '@storybook/react';

const ACCORDION_STORY_ID_PREFIX = 'components-accordion--';

export const Standard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Accordion.Container>
        <Accordion
          title={
            <Accordion.Content>
              This is styled with Accordion.Content
            </Accordion.Content>
          }
          isOpen={isOpen}
          onClick={toggleAccordion}
        >
          <Accordion.Content>
            Accordion.Content adds standard accordion padding.
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
      <br />
      <Accordion.Container>
        <Accordion
          title={
            <Accordion.Content>
              <Accordion.Truncate>
                {text('Title text', 'Title text: Use Knobs To Modify Component')}
              </Accordion.Truncate>
            </Accordion.Content>
          }
          onClick={action('Accordion clicked')}
          isOpen={boolean('isOpen', true)}
          noBorder={boolean('noBorder', false)}
          disabled={boolean('disabled', false)}
          rightAlignArrow={boolean('rightAlignArrow', false)}
        >
          <Accordion.Content>
            {text('Expanded text', 'Accordion expanded content')}
          </Accordion.Content>
        </Accordion>
      </Accordion.Container>
    </React.Fragment>
  );
};

Standard.storyName = 'Standard + With Controls';

export const NoBorder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

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

NoBorder.id = `${ACCORDION_STORY_ID_PREFIX}no-border`;

export const Disabled = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

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

Disabled.id = `${ACCORDION_STORY_ID_PREFIX}disabled`;

export const RightAlignedArrow = () => {
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

RightAlignedArrow.id = `${ACCORDION_STORY_ID_PREFIX}right-aligned-arrow`;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Accordion } from 'radiance-ui';"}
          />
          <Primary />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Heading>Stories</Heading>
          <Anchor storyId={NoBorder.id} />
          <Heading>No Border</Heading>
          <Description>
            This accordion style permits usage without the border typically
            found on the accordion
          </Description>
          <Canvas>
            <Story id={NoBorder.id} />
          </Canvas>
          <Anchor storyId={Disabled.id} />
          <Heading>Disabled</Heading>
          <Description>
            The disabled accordion should only be used when the user is taking a
            clearly defined action in a series of tasks. A good example of this
            component is the photo uploader in the sign up flow. Accordion
            blocks which represent specific photos the user takes, remain
            disabled and closed until the respective steps are reached. The user
            is then auto-advanced through each accordion block.
          </Description>
          <Canvas>
            <Story id={Disabled.id} />
          </Canvas>
          <Anchor storyId={RightAlignedArrow.id} />
          <Heading>Right-aligned Arrow</Heading>
          <Canvas>
            <Story id={RightAlignedArrow.id} />
          </Canvas>
        </React.Fragment>
      ),
    },
  },
} as Meta;
