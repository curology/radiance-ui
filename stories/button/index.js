import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ButtonReadme from 'docs/button.md';
import RoundButtonReadme from 'docs/roundButton.md';
import { CheckmarkIcon, ArrowLeftIcon, ArrowRightIcon } from 'src/svgs/icons';
import { Button, RoundButton, Typography } from 'src/shared-components';
import { SPACING } from 'src/constants';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button',
  withDocs(ButtonReadme, () => (
    <React.Fragment>
      <Button.Container css="width: 50%; display: inline-block;">
        <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
          Without Icon
        </Typography.Heading>
        <Button>Primary Button</Button>
        <Button buttonType="secondary">Secondary Button</Button>
        <Button buttonType="tertiary">Tertiary Button</Button>
        <Button buttonType="quaternary">Quaternary Button</Button>
        <Button disabled>Disabled Button</Button>

        <Button loading>Primary Loading</Button>
        <Button loading buttonType="secondary">
          Secondary Loading
        </Button>
        <Button buttonType="tertiary" loading>
          Tertiary Loading
        </Button>
        <Button buttonType="quaternary" loading>
          Quaternary Loading
        </Button>
      </Button.Container>

      <Button.Container css="width: 50%; display: inline-block;">
        <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
          With Icon
        </Typography.Heading>
        <Button icon={<CheckmarkIcon />}>Primary Button</Button>
        <Button buttonType="secondary" icon={<CheckmarkIcon />}>
          Secondary Button
        </Button>
        <Button buttonType="tertiary" icon={<CheckmarkIcon />}>
          Tertiary Button
        </Button>
        <Button buttonType="quaternary" icon={<CheckmarkIcon />}>
          Quaternary Button
        </Button>
        <Button disabled icon={<CheckmarkIcon />}>
          Disabled Button
        </Button>

        <Button loading icon={<CheckmarkIcon />}>
          Primary Loading
        </Button>
        <Button loading buttonType="secondary" icon={<CheckmarkIcon />}>
          Secondary Loading
        </Button>
        <Button loading buttonType="tertiary" icon={<CheckmarkIcon />}>
          Tertiary Loading
        </Button>
        <Button loading buttonType="quaternary" icon={<CheckmarkIcon />}>
          Quaternary Loading
        </Button>

      </Button.Container>
      <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <Button
        buttonType={select('buttonType', ['primary', 'secondary', 'tertiary', 'quaternary'], 'primary')}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
        onClick={action('button clicked')}
        textColor={text('textColor', '')}
      >
        {text('children', 'Click me!')}
      </Button>
    </React.Fragment>
  ))
);

stories.add(
  'RoundButton',
  withDocs(RoundButtonReadme, () => (
    <React.Fragment>
      <RoundButton.Container multi>
        <RoundButton icon={<CheckmarkIcon />}>Primary</RoundButton>
        <RoundButton buttonType="secondary" icon={<ArrowRightIcon />}>
          Secondary
        </RoundButton>
      </RoundButton.Container>
      <RoundButton.Container multi>
        <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />}>
          Tertiary
        </RoundButton>
        <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />}>
          Quaternary
        </RoundButton>
      </RoundButton.Container>

      <RoundButton.Container multi>
        <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} disabled>
          Disabled
        </RoundButton>
      </RoundButton.Container>
      <RoundButton.Container multi>
        <RoundButton icon={<ArrowLeftIcon />} loading>
          Primary Loading
        </RoundButton>
        <RoundButton buttonType="secondary" icon={<ArrowRightIcon />} loading>
          Secondary Loading
        </RoundButton>
      </RoundButton.Container>
      <RoundButton.Container multi>
        <RoundButton buttonType="tertiary" icon={<ArrowLeftIcon />} loading>
          Tertiary Loading
        </RoundButton>
        <RoundButton buttonType="quaternary" icon={<ArrowRightIcon />} loading>
          Quaternary Loading
        </RoundButton>
      </RoundButton.Container>

      <Typography.Heading css={`text-align: left; padding: ${SPACING.base} 0 ${SPACING.small};`}>
        With Knobs
      </Typography.Heading>
      <RoundButton.Container>
        <RoundButton
          buttonType={select('buttonType', ['primary', 'secondary', 'tertiary', 'quaternary'], 'primary')}
          loading={boolean('loading', false)}
          disabled={boolean('disabled', false)}
          onClick={action('button clicked')}
          icon={<CheckmarkIcon />}
          textColor={text('textColor', '')}
        >
          {text('children', 'Click me!')}
        </RoundButton>
      </RoundButton.Container>
    </React.Fragment>
  ))
);
