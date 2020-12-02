import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import Color from './color';

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const COLORS = () => {
  const theme = useTheme();
  const colorKeys = Object.keys(theme.COLORS);

  return (
    <MainContainer>
      {colorKeys.map((colorKey) => {
        const colorHex = theme.COLORS[colorKey] as string;
        return (
          <Color key={colorKey} colorName={colorKey} colorHex={colorHex} />
        );
      })}
    </MainContainer>
  );
};
