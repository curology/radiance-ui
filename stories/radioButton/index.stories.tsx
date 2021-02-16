import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RadioButton } from 'src/shared-components';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { useTheme } from 'emotion-theming';
import {
  chromaticAwareExcludeStories,
  decorateStoriesWithTheme,
} from 'stories/utils';

import { AcneGlyph } from '../../src/icons';

export const Primary = () => {
  const [isActive, setIsActive] = React.useState(true);

  const toggleActive = (bool: boolean) => () => setIsActive(bool);

  return (
    <React.Fragment>
      <RadioButton
        type="primary"
        checked={isActive}
        onClick={toggleActive(true)}
      >
        This is a primary radio button
      </RadioButton>
      <RadioButton
        type="primary"
        checked={!isActive}
        onClick={toggleActive(false)}
      >
        This is a primary radio button (unchecked)
      </RadioButton>
    </React.Fragment>
  );
};

export const Secondary = () => {
  const [isActive, setIsActive] = React.useState(true);

  const toggleActive = (bool: boolean) => () => setIsActive(bool);

  return (
    <React.Fragment>
      <RadioButton
        type="secondary"
        checked={isActive}
        onClick={toggleActive(true)}
      >
        This is a secondary radio button
      </RadioButton>
      <RadioButton
        type="secondary"
        checked={!isActive}
        onClick={toggleActive(false)}
      >
        This is a secondary radio button (unchecked)
      </RadioButton>
    </React.Fragment>
  );
};

export const WithControls = () => {
  const theme = useTheme();

  return (
    <RadioButton
      checked={boolean('checked', false)}
      type={select('type', ['primary', 'secondary'], 'primary')}
      onClick={(action('radio button clicked'), () => undefined)}
      icon={
        boolean('icon', false) ? (
          <AcneGlyph width={40} height={40} fill={theme.COLORS.primary} />
        ) : null
      }
      size={select('size', ['large', 'small'], 'small')}
    >
      {text('children', 'Render radio label here')}
    </RadioButton>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

export const {
  PrimarySecondary,
  SecondarySecondary,
} = decorateStoriesWithTheme({ Primary, Secondary });

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { RadioButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
  excludeStories: chromaticAwareExcludeStories([
    PrimarySecondary.storyName,
    SecondarySecondary.storyName,
  ]),
} as Meta;
