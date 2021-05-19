import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { SPACER } from 'src/constants';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
`;

export const FONTS = () => {
  const theme = useTheme();
  const fontsKeys = Object.keys(theme.FONTS) as Array<
    keyof typeof theme['FONTS']
  >;

  return (
    <MainContainer>
      {fontsKeys.map((fontsKey) => {
        const fontsValue = theme.FONTS[fontsKey];
        return (
          <p key={fontsKey}>
            <span style={{ fontFamily: fontsValue }}>
              {fontsKey}: {fontsValue}
            </span>
            <br />
            <span style={{ fontFamily: fontsValue, fontWeight: 'bold' }}>
              {fontsKey} bold: {fontsValue}
            </span>
            <br />
            <span style={{ fontFamily: fontsValue, fontStyle: 'italic' }}>
              {fontsKey} italic: {fontsValue}
            </span>
            <br />
            <br />
          </p>
        );
      })}
    </MainContainer>
  );
};
