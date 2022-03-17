import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { SPACER } from 'src/constants';

import Color from './color';

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${SPACER.xlarge};
`;

export const COLORS = () => {
  const theme = useTheme();
  const colorKeys = Object.keys(theme.COLORS) as Array<
    keyof typeof theme['COLORS']
  >;

  return (
    <MainContainer>
      {colorKeys.map((colorKey) => {
        const colorHex = theme.COLORS[colorKey];
        return (
          <Color
            key={colorKey}
            colorName={colorKey}
            colorHex={colorHex}
          />
        );
      })}
    </MainContainer>
  );
};
