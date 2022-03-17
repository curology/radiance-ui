import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SPACER } from 'src/constants';
import { Container } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
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
          min-height: 135px;
          margin: 0 ${SPACER.x5large} ${SPACER.x5large} 0;
          box-shadow: ${boxShadowValue};
        `;

        return (
          <Container
            key={boxShadowKey}
            css={boxShadowBoxStyles}
          >
            <Container.Section>
              <strong>Key:</strong> {boxShadowKey}
              <br />
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
