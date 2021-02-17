import React from 'react';
import {
  ArgsTable,
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RoundButton } from 'src/shared-components';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import type { Meta } from '@storybook/react';
import { ThemeColors } from 'src/constants/themes/types';
import { useTheme } from 'emotion-theming';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckmarkIcon,
  CrossIcon,
} from '../../../src/icons';

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: ${SPACER.large} 0 ${SPACER.x2large};
`;

export const Default = () => (
  <ButtonsContainer>
    <RoundButton icon={<CheckmarkIcon />}>Primary</RoundButton>
    <RoundButton buttonType="secondary" icon={<ArrowRightIcon />}>
      Secondary
    </RoundButton>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />}>
      Tertiary
    </RoundButton>
    <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />}>
      Quaternary
    </RoundButton>
    <RoundButton buttonType="action" icon={<CrossIcon />}>
      Action
    </RoundButton>
  </ButtonsContainer>
);

export const Disabled = () => (
  <ButtonsContainer>
    <RoundButton icon={<ArrowLeftIcon />} disabled>
      Primary
    </RoundButton>
    <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} disabled>
      Secondary
    </RoundButton>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} disabled>
      Tertiary
    </RoundButton>
    <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} disabled>
      Quaternary
    </RoundButton>
    <RoundButton buttonType="action" icon={<CrossIcon />} disabled>
      Action
    </RoundButton>
  </ButtonsContainer>
);

export const Loading = () => (
  <ButtonsContainer>
    <RoundButton icon={<ArrowLeftIcon />} isLoading>
      Primary
    </RoundButton>
    <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} isLoading>
      Secondary
    </RoundButton>
    <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} isLoading>
      Tertiary
    </RoundButton>
    <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} isLoading>
      Quaternary
    </RoundButton>
    <RoundButton buttonType="action" icon={<CrossIcon />} isLoading>
      Action
    </RoundButton>
  </ButtonsContainer>
);

export const WithColor = () => {
  const theme = useTheme();

  return (
    <ButtonsContainer>
      <RoundButton buttonColor={theme.COLORS.error} icon={<CheckmarkIcon />}>
        Primary
      </RoundButton>
      <RoundButton
        buttonColor={theme.COLORS.error}
        buttonType="secondary"
        icon={<ArrowRightIcon />}
      >
        Secondary
      </RoundButton>
      <RoundButton
        buttonColor={theme.COLORS.error}
        buttonType="tertiary"
        icon={<ArrowLeftIcon />}
      >
        Tertiary
      </RoundButton>
      <RoundButton
        buttonColor={theme.COLORS.error}
        buttonType="quaternary"
        icon={<ArrowRightIcon />}
      >
        Quaternary
      </RoundButton>
      <RoundButton
        buttonColor={theme.COLORS.error}
        buttonType="action"
        icon={<CrossIcon />}
      >
        Action
      </RoundButton>
    </ButtonsContainer>
  );
};

export const RoundButtonContainerWithMultiProp = () => (
  <RoundButton.Container multi>
    <RoundButton icon={<ArrowLeftIcon />} />
    <RoundButton icon={<ArrowRightIcon />} />
  </RoundButton.Container>
);

export const WithControls = () => {
  const theme = useTheme();

  return (
    <ButtonsContainer>
      <RoundButton
        buttonType={select(
          'buttonType',
          ['primary', 'secondary', 'tertiary', 'quaternary', 'action'],
          'primary',
        )}
        buttonColor={select('buttonColor', theme.COLORS, theme.COLORS.primary)}
        isLoading={boolean('isLoading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
        icon={<CheckmarkIcon />}
        textColor={text('textColor', '') as ThemeColors}
      >
        {text('children', 'Click me!')}
      </RoundButton>
    </ButtonsContainer>
  );
};

WithControls.parameters = {
  chromatic: { disable: true },
};

const ROUND_BUTTON_STORIES: Meta = {
  title: 'Components/Button/RoundButton',
  component: RoundButton,
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={"import { RoundButton } from 'radiance-ui';"}
          />
          <Heading>Props:</Heading>
          <ArgsTable />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default ROUND_BUTTON_STORIES;
