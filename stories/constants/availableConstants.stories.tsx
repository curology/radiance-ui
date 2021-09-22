import React from 'react';
import { css } from '@emotion/react';
import * as CONSTANTS from 'src/constants';
import { Typography } from 'src/shared-components';

import renderConstantsMap from './renderConstantsMap';

const {
  COLORS_PROP_TYPES: _COLORS_PROP_TYPES,
  // TODO-theming: Add to story once finalized,
  // otherwise visual tests will fail with every change
  primaryTheme: _primaryTheme,
  secondaryTheme: _secondaryTheme,
  REACT_PORTAL_SECTION_ID: _REACT_PORTAL_SECTION_ID,
  BORDER_RADIUS_PROP_TYPES: _BORDER_RADIUS_PROP_TYPES,
  ...VALID_CONSTANTS
} = CONSTANTS;

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

AvailableConstants.parameters = {
  chromatic: { viewports: [CONSTANTS.BREAKPOINTS.xs] },
};
