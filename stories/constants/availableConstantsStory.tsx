import React from 'react';
import { css } from '@emotion/core';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';

import renderConstantsMap from './renderConstantsMap';

/**
 * We don't have a story for this, but export it named and don't want it included
 * in the CONSTANTS glob
 */
const COLORS_PROP_TYPES = 'COLORS_PROP_TYPES';

const CONSTANTS_WITH_OWN_STORY = ['BOX_SHADOWS', 'COLORS', COLORS_PROP_TYPES];

type CategoryConstant =
  | Record<string, unknown>
  | (typeof Proxy & { __isProxy: boolean });

const AvailableConstantsStory = () => (
  <div
    css={css`
      text-align: left;
    `}
  >
    {Object.keys(CONSTANTS).map((category) => {
      if (CONSTANTS_WITH_OWN_STORY.includes(category)) {
        return null;
      }

      const categoryConstant = CONSTANTS[category] as CategoryConstant;

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
);

export default AvailableConstantsStory;
