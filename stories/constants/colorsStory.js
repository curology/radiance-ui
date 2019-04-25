import React from 'react';
import styled from '@emotion/styled';

import { SPACING } from 'src/constants';
import { Typography } from 'src/shared-components';
import * as COLORS from 'src/constants/colors';

import Color from './color';

const MainContainer = styled.div`
  padding: ${SPACING.medium};
`;

const ColorsContainer = styled.div`
  margin: ${SPACING.medium} 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const colorsStory = () => (
  <MainContainer>
    <Typography.Heading>Colors:</Typography.Heading>
    {Object.keys(COLORS).map(category => {
      if (category === 'default') {
        return null;
      }

      const categoryColors = COLORS[category];

      return (
        <React.Fragment key={category}>
          <Typography.Title>{category}:</Typography.Title>
          <ColorsContainer>
            {Object.keys(categoryColors).map(color => {
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

export default colorsStory;
