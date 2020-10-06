import React from 'react';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import { Typography } from 'src/shared-components';
import * as COLORS from 'src/constants/colors';

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

const ColorsStory = () => (
  <MainContainer>
    {Object.keys(COLORS).map((category) => {
      if (category === 'default' || category === 'COLORS_PROP_TYPES') {
        return null;
      }

      const categoryColors = COLORS[category];

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

export default ColorsStory;
