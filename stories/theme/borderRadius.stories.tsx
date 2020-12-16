import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { SPACER } from 'src/constants';
import { Container } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
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
        const borderRadiusBoxStyles = css`
          width: 350px;
          margin-bottom: ${SPACER.xlarge};
          border: 2px solid ${theme.COLORS.primary};
          border-radius: ${borderRadiusValue};
        `;

        return (
          <Container key={borderRadiusKey} css={borderRadiusBoxStyles}>
            <Container.Section>
              <strong>Key:</strong> {borderRadiusKey}
              <br />
              <br />
              <strong>Value:</strong> {borderRadiusValue}
            </Container.Section>
          </Container>
        );
      })}
    </MainContainer>
  );
};

BorderRadius.storyName = 'BORDER_RADIUS';
