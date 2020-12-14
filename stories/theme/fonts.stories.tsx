import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { SPACER } from 'src/constants';

const MainContainer = styled.div`
  padding: ${SPACER.large} ${SPACER.large};
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
            <strong>{fontsKey}</strong>: {fontsValue}
          </p>
        );
      })}
    </MainContainer>
  );
};
