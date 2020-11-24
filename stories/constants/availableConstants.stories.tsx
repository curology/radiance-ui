import React from 'react';
import { css } from '@emotion/react';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';

import renderConstantsMap from './renderConstantsMap';

/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  BOX_SHADOWS,
  COLORS,
  COLORS_PROP_TYPES,
  // TODO-theming: Add to story once finalized,
  // otherwise visual tests will fail with every change
  primaryTheme,
  secondaryTheme,
  ...VALID_CONSTANTS
} = CONSTANTS;
/* eslint-enable @typescript-eslint/no-unused-vars */

type CategoryConstant =
  | Record<string, unknown>
  | (typeof Proxy & { __isProxy: boolean });

export const AvailableConstants = () => (
  <div
    css={css`
      text-align: left;
    `}
  >
    {Object.keys(VALID_CONSTANTS).map((category) => {
      const categoryConstant = VALID_CONSTANTS[category] as CategoryConstant;

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
