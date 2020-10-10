import React from 'react';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import { Typography } from 'src/shared-components';
import * as ALL_COLORS from 'src/constants/colors';

import Color from './color';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
`;

const ColorsContainer = styled.div`
  margin: ${SPACER.xlarge} 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  default: defaultExport,
  COLORS_PROP_TYPES,
  ...VALID_COLORS
} = ALL_COLORS;
/* eslint-enable @typescript-eslint/no-unused-vars */

export const COLORS = () => (
  <MainContainer>
    {Object.keys(VALID_COLORS).map((category) => {
      const categoryColors = VALID_COLORS[category];

      return (
        <React.Fragment key={category}>
          <Typography.Title>{category}:</Typography.Title>
          <ColorsContainer>
            {Object.keys(categoryColors).map((color) => {
              const colorHex = categoryColors[color];
              return (
                <Color key={color} colorName={color} colorHex={colorHex} />
              );
            })}
          </ColorsContainer>
        </React.Fragment>
      );
    })}
  </MainContainer>
);
