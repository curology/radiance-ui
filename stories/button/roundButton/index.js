import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import RoundButtonReadme from 'docs/button/roundButton.md';
import { RoundButton, Typography } from 'src/shared-components';
import {
  CheckmarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
} from 'src/svgs/icons';
import { SPACING } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: ${SPACING.base} 0 ${SPACING.large};
`;

const RoundButtonStory = withDocs(RoundButtonReadme, () => (
  <MainContainer>
    <Typography.Title>Default</Typography.Title>
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

      <RoundButton buttonType="action" icon={<CloseIcon />}>
        Action
      </RoundButton>
    </ButtonsContainer>

    <Typography.Title>Disabled</Typography.Title>
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

      <RoundButton buttonType="action" icon={<CloseIcon />} disabled>
        Action
      </RoundButton>
    </ButtonsContainer>

    <Typography.Title>Loading</Typography.Title>
    <ButtonsContainer>
      <RoundButton icon={<ArrowLeftIcon />} loading>
        Primary
      </RoundButton>

      <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} loading>
        Secondary
      </RoundButton>

      <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} loading>
        Tertiary
      </RoundButton>

      <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} loading>
        Quaternary
      </RoundButton>

      <RoundButton buttonType="action" icon={<CloseIcon />} loading>
        Action
      </RoundButton>
    </ButtonsContainer>

    <Typography.Title>
      Within RoundButton.Container (with multi prop)
    </Typography.Title>
    <RoundButton.Container
      multi
      css={css`
        margin: ${SPACING.medium} 0;
      `}
    >
      <RoundButton icon={<ArrowLeftIcon />} />
      <RoundButton icon={<ArrowRightIcon />} />
    </RoundButton.Container>

    <Typography.Title>With Knobs</Typography.Title>
    <ButtonsContainer
      css={css`
        max-width: 100px;
      `}
    >
      <RoundButton
        buttonType={select(
          'buttonType',
          ['primary', 'secondary', 'tertiary', 'quaternary', 'action'],
          'primary'
        )}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
        icon={<CheckmarkIcon />}
        textColor={text('textColor', '')}
      >
        {text('children', 'Click me!')}
      </RoundButton>
    </ButtonsContainer>
  </MainContainer>
));

export default RoundButtonStory;
