import React from 'react';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { css } from '@emotion/core';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';
// eslint-disable-next-line import/extensions
import ConstantsReadme from 'docs/constants.md';

import renderConstantsMap from './renderConstantsMap';
import colorsStory from './colorsStory';
import boxShadowsStory from './boxShadowsStory';

const stories = storiesOf('CONSTANTS', module);

const CONSTANTS_WITH_OWN_STORY = ['COLORS'];
const DEPRECATED_CONSTANTS = ['SPACING'];

const EXCLUDED_CONSTANTS = [
  ...CONSTANTS_WITH_OWN_STORY,
  ...DEPRECATED_CONSTANTS,
];

const EXCLUDED_CONSTANT_PROPERTIES = {
  SPACER: ['base'],
};

const excludeProperties = (category, properties) => {
  const excludedProperties = EXCLUDED_CONSTANT_PROPERTIES[category];

  return Object.entries(properties).reduce((filtered, [key, value]) => {
    if (!excludedProperties.includes(key)) {
      // eslint-disable-next-line no-param-reassign
      filtered[key] = value;
    }

    return filtered;
  }, {});
};

stories.add(
  'Available Constants',
  withDocs(ConstantsReadme, () => (
    <div
      css={css`
        text-align: left;
      `}
    >
      {Object.keys(CONSTANTS).map(category => {
        if (EXCLUDED_CONSTANTS.includes(category)) {
          return null;
        }

        let categoryConstant = CONSTANTS[category];

        if (EXCLUDED_CONSTANT_PROPERTIES[category]) {
          categoryConstant = excludeProperties(category, categoryConstant);
        }

        return (
          <div
            key={category}
            css={css`
              padding-bottom: ${CONSTANTS.SPACER.medium};
            `}
          >
            <Typography.Heading>{category}</Typography.Heading>
            {renderConstantsMap(categoryConstant)}
          </div>
        );
      })}
    </div>
  )),
);

stories.add('COLORS', colorsStory);

stories.add('BOX_SHADOWS', boxShadowsStory);
