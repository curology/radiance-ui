import React from 'react';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { css } from '@emotion/core';

import * as COLORS from 'src/constants/colors';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';
import ConstantsReadme from 'docs/constants.md';

import renderConstantsMap from './renderConstantsMap';
import Color from './Color';

const stories = storiesOf('CONSTANTS', module);

const CONSTANTS_WITH_OWN_STORY = [
  'COLORS',
];

stories.add(
  'available constants',
  withDocs(ConstantsReadme, () => (
    <div css={css`text-align: left;`}>
      {
        Object.keys(CONSTANTS).map(category => {
          if (CONSTANTS_WITH_OWN_STORY.includes(category)) {
            return null;
          }

          const categoryConstant = CONSTANTS[category];

          return (
            <div key={category} css={css`padding-bottom: ${CONSTANTS.SPACING.small};`}>
              <Typography.Heading>{category}</Typography.Heading>
              {renderConstantsMap(categoryConstant)}
            </div>
          );
        })
      }
    </div>
  ))
);

stories.add('COLORS', () => (
  <React.Fragment>
    {Object.keys(COLORS).map(category => {
      if (category === 'default') {
        return null;
      }

      const categoryColors = COLORS[category];

      return (
        <React.Fragment key={category}>
          <div css={css`font-size: 16px;`}>{category}</div>
          <div css={css`display: flex; flex-wrap: wrap;`}>
            {Object.keys(categoryColors).map(color => {
              const colorHex = categoryColors[color];
              return <Color key={color} colorName={color} colorHex={colorHex} />;
            })}
          </div>
          <br />
        </React.Fragment>
      );
    })}
  </React.Fragment>
));
