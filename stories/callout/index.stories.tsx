import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import { Callout } from 'src/shared-components';
import { boolean, text } from '@storybook/addon-knobs';
import { BREAKPOINTS } from 'src/constants';
import type { Meta } from '@storybook/react';

import { LockGlyph, NeckGlyph, NoneGlyph } from '../../src/icons';

export const Usage = () => (
  <React.Fragment>
    <Callout.Container>
      <Callout>
        Simple callout with <strong>bolded text</strong>
      </Callout>
    </Callout.Container>
    <br />
    <Callout.Container>
      <Callout type="success" icon={<LockGlyph />}>
        Your photos are private and are used by your provider to treat your skin
      </Callout>
    </Callout.Container>
    <br />
    <Callout.Container>
      <Callout type="error" icon={<NoneGlyph />}>
        <strong>Oops</strong>
        <br />
        Something is wrong with this page
      </Callout>
    </Callout.Container>
  </React.Fragment>
);

export const WithIcon = () => (
  <Callout.Container>
    <Callout icon={<NeckGlyph />}>
      <strong>We recommend</strong> this bundle because you indicated concern
      about <strong>dry skin</strong> and <strong>body acne</strong>
    </Callout>
  </Callout.Container>
);

export const WithoutContainer = () => (
  <Callout>
    This Callout will strech 100% the width of the parent container.
  </Callout>
);

WithoutContainer.parameters = {
  chromatic: { viewports: [BREAKPOINTS.xs, BREAKPOINTS.md] },
};

export const WithControls = () => (
  <Callout icon={boolean('With Icon', true) ? <NeckGlyph /> : null}>
    {text(
      'text',
      'We recommend this bundle because you indicated concern about dry skin and body acne',
    )}
  </Callout>
);

WithControls.parameters = {
  chromatic: { disable: true },
};

export const WithCloseIcon = () => (
  <Callout
    onClose={() => {
      alert('onClose callback called.');
    }}
  >
    <span role="img" aria-label="Heart">
      ❤️
    </span>{' '}
    This callout has a close (X) icon that calls the <strong>onClose</strong>{' '}
    callback when clicked. It also has a lot of text to demonstrate that the
    text wraps around the close icon. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Vivamus vel sem scelerisque ex euismod laoreet non eu
    nulla. Cras est lacus, faucibus id finibus id, blandit sit amet nunc. Nullam
    sagittis odio non ante malesuada eleifend. Cras efficitur nulla non dui
    euismod maximus. Donec euismod massa in ligula aliquet sollicitudin. In hac
    habitasse platea dictumst. Quisque sollicitudin, massa vel ullamcorper
    pharetra, tortor risus mollis nisi, et ultrices justo lectus lobortis lorem.
    Pellentesque imperdiet turpis sed lobortis convallis. Aliquam sit amet
    cursus nisl. Curabitur sed metus nec tellus tristique convallis vehicula ut
    velit. Morbi egestas ultricies magna quis vulputate. Sed sollicitudin neque
    et tortor finibus, nec vehicula tortor rutrum.
  </Callout>
);

const CHROMATIC_OPTIONS = {
  chromatic: { viewports: [BREAKPOINTS.xs] },
} as const;

interface CalloutStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
  title: string;
}

const CALLOUT_STORIES: CalloutStories = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    ...CHROMATIC_OPTIONS,
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { Callout } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default CALLOUT_STORIES;
