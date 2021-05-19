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

import { BREAKPOINTS, SPACER } from '../../../src/constants';

import type { Meta } from '@storybook/react';

/**
 * Adds padding to Focused story to capture focus state in Chromatic
 */
const AnchorLinkContainer = ({ children }: { children: JSX.Element }) => (
  <div style={{ padding: SPACER.medium }}>{children}</div>
);

export const Default = () => (
  <AnchorLinkButton onClick={() => undefined}>
    Tips for taking photos
  </AnchorLinkButton>
);

Default.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

export const Focused = () => {
  const anchorLinkButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    anchorLinkButtonRef.current?.focus();
  }, []);

  return (
    <AnchorLinkContainer>
      <AnchorLinkButton ref={anchorLinkButtonRef} onClick={() => undefined}>
        Tips for taking photos
      </AnchorLinkButton>
    </AnchorLinkContainer>
  );
};

Focused.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
};

export const WithControls = () => (
  <AnchorLinkButton onClick={() => undefined}>
    {text('children', 'Edit me!')}
  </AnchorLinkButton>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

const ANCHOR_LINK_BUTTON_STORIES: Meta = {
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
};

export default ANCHOR_LINK_BUTTON_STORIES;
