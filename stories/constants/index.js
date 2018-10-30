import React from 'react';
import { storiesOf } from '@storybook/react';

import * as COLORS from 'src/constants/colors';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';

import renderConstantsMap from './renderConstantsMap';
import Color from './Color';

const stories = storiesOf('CONSTANTS', module);

stories.add('available constants', () => (
  <div>
    {
      Object.keys(CONSTANTS).map(category => {
        if (['COLORS'].includes(category)) {
          // COLORS is handled on its own story
          return null;
        }

        const categoryConstant = CONSTANTS[category];

        return (
          <div css={`padding-bottom: ${CONSTANTS.SPACING.small};`}>
            <Typography.Heading>{category}</Typography.Heading>
            {renderConstantsMap(categoryConstant)}
          </div>
        );
      })
    }
  </div>
));

stories.add('COLORS', () => (
  <React.Fragment>
    {Object.keys(COLORS).map(category => {
      if (category === 'default') {
        return null;
      }

      const categoryColors = COLORS[category];

      return (
        <React.Fragment>
          <div css="font-size: 16px;">{category}</div>
          <div css="display: flex; flex-wrap: wrap;">
            {Object.keys(categoryColors).map(color => {
              const colorHex = categoryColors[color];
              return <Color colorName={color} colorHex={colorHex} />;
            })}
          </div>
          <br />
        </React.Fragment>
      );
    })}
  </React.Fragment>
));
