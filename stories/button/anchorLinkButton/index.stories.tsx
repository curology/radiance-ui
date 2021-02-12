import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { text } from '@storybook/addon-knobs';
import { AnchorLinkButton } from 'src/shared-components';
import type { Meta } from '@storybook/react';

export const Default = () => (
  <AnchorLinkButton onClick={() => undefined}>
    Tips for taking photos
  </AnchorLinkButton>
);

export const Focused = () => {
  const anchorLinkButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    anchorLinkButtonRef.current?.focus();
  }, []);

  return (
    <AnchorLinkButton ref={anchorLinkButtonRef} onClick={() => undefined}>
      Tips for taking photos
    </AnchorLinkButton>
  );
};

export const WithControls = () => (
  <AnchorLinkButton onClick={() => undefined}>
    {text('children', 'Edit me!')}
  </AnchorLinkButton>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Components/Button/AnchorLinkButton',
  component: AnchorLinkButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { AnchorLinkButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
