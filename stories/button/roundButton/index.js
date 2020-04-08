import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';
// eslint-disable-next-line import/order
import { css } from '@emotion/core';

// eslint-disable-next-line import/extensions
import RoundButtonReadme from 'docs/button/roundButton.md';
import { RoundButton, Typography } from 'src/shared-components';
import {
  CheckmarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CrossIcon,
} from 'src/svgs/icons';
import { SPACER } from 'src/constants';

const MainContainer = styled.div`
  text-align: left;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  margin: ${SPACER.large} 0 ${SPACER.x2large};
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

      <RoundButton buttonType="action" icon={<CrossIcon />}>
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

      <RoundButton buttonType="action" icon={<CrossIcon />} disabled>
        Action
      </RoundButton>
    </ButtonsContainer>

    <Typography.Title>Loading</Typography.Title>
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

    <Typography.Title>
      Within RoundButton.Container (with multi prop)
    </Typography.Title>
    <RoundButton.Container
      multi
      css={css`
        margin: ${SPACER.xlarge} 0;
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
          'primary',
        )}
        isLoading={boolean('isLoading', false)}
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
