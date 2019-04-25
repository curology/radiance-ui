import React from 'react';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { css } from '@emotion/core';

import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';
import ConstantsReadme from 'docs/constants.md';

import renderConstantsMap from './renderConstantsMap';
import colorsStory from './colorsStory';
import boxShadowsStory from './boxShadowsStory';

const stories = storiesOf('CONSTANTS', module);

const CONSTANTS_WITH_OWN_STORY = ['COLORS'];

stories.add(
  'Available Constants',
  withDocs(ConstantsReadme, () => (
    <div
      css={css`
        text-align: left;
      `}
    >
      {Object.keys(CONSTANTS).map(category => {
        if (CONSTANTS_WITH_OWN_STORY.includes(category)) {
          return null;
        }

        const categoryConstant = CONSTANTS[category];

        return (
          <div
            key={category}
            css={css`
              padding-bottom: ${CONSTANTS.SPACING.small};
            `}
          >
            <Typography.Heading>{category}</Typography.Heading>
            {renderConstantsMap(categoryConstant)}
          </div>
        );
      })}
    </div>
  ))
);

stories.add('COLORS', colorsStory);

stories.add('BOX_SHADOWS', boxShadowsStory);
