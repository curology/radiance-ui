import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import { Container } from 'src/shared-components';
import { useTheme } from 'emotion-theming';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const BoxShadows = () => {
  const theme = useTheme();
  const boxShadowsKeys = Object.keys(theme.BOX_SHADOWS) as Array<
    keyof typeof theme['BOX_SHADOWS']
  >;

  return (
    <MainContainer>
      {boxShadowsKeys.map((boxShadowKey) => {
        const boxShadowValue = theme.BOX_SHADOWS[boxShadowKey];
        const boxShadowBoxStyles = css`
          width: 350px;
          margin: ${SPACER.large};
          box-shadow: ${boxShadowValue};
        `;

        return (
          <Container key={boxShadowKey} css={boxShadowBoxStyles}>
            <Container.Section>
              <strong>Key:</strong> {boxShadowKey}
              <br />
              <strong>Value:</strong> {boxShadowValue}
            </Container.Section>
          </Container>
        );
      })}
    </MainContainer>
  );
};

BoxShadows.storyName = 'BOX_SHADOWS';
