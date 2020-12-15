import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { SPACER } from 'src/constants';

const MainContainer = styled.div`
  padding: ${SPACER.large} ${SPACER.large};
`;

export const BorderRadius = () => {
  const theme = useTheme();
  const borderRadiusKeys = Object.keys(theme.BORDER_RADIUS) as Array<
    keyof typeof theme['BORDER_RADIUS']
  >;

  return (
    <MainContainer>
      {borderRadiusKeys.map((borderRadiusKey) => {
        const borderRadiusValue = theme.BORDER_RADIUS[borderRadiusKey];
        return (
          <p key={borderRadiusKey}>
            <strong>{borderRadiusKey}</strong>: {borderRadiusValue}
          </p>
        );
      })}
    </MainContainer>
  );
};

BorderRadius.storyName = 'BORDER_RADIUS';
