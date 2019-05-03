import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import ButtonReadme from 'docs/button/button.md';
import { CheckmarkIcon } from 'src/svgs/icons';
import { Button, Typography } from 'src/shared-components';
import { SPACER } from 'src/constants';

const ButtonStory = withDocs(ButtonReadme, () => (
  <React.Fragment>
    <Button.Container
      css={css`
        width: 50%;
        display: inline-block;
      `}
    >
      <Typography.Heading
        css={css`
          text-align: left;
          padding: ${SPACER.large} 0 ${SPACER.medium};
        `}
      >
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

    <Button.Container
      css={css`
        width: 50%;
        display: inline-block;
      `}
    >
      <Typography.Heading
        css={css`
          text-align: left;
          padding: ${SPACER.large} 0 ${SPACER.medium};
        `}
      >
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
    <Typography.Heading
      css={css`
        text-align: left;
        padding: ${SPACER.large} 0 ${SPACER.medium};
      `}
    >
      With Knobs
    </Typography.Heading>
    <Button
      buttonType={select(
        'buttonType',
        ['primary', 'secondary', 'tertiary', 'quaternary'],
        'primary'
      )}
      loading={boolean('loading', false)}
      disabled={boolean('disabled', false)}
      onClick={action('button clicked')}
      textColor={text('textColor', '')}
    >
      {text('children', 'Click me!')}
    </Button>
  </React.Fragment>
));

export default ButtonStory;
