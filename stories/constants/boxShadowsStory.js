import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { SPACER } from 'src/constants';
import * as BOX_SHADOWS from 'src/constants/boxShadows';
import { Container, Typography } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
`;

const BoxesContainer = styled.div`
  margin: ${SPACER.xlarge} 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const baseBoxStyle = css`
  width: 350px;
  margin: ${SPACER.large};
`;

const boxShadowsStory = () => (
  <MainContainer>
    {Object.keys(BOX_SHADOWS).map(category => {
      if (category === 'default') {
        return null;
      }

      const categoryBoxShadows = BOX_SHADOWS[category];

      return (
        <React.Fragment key={category}>
          <Typography.Title>{category}:</Typography.Title>
          <BoxesContainer>
            {Object.keys(categoryBoxShadows).map(shadow => {
              const styles = css`
                ${baseBoxStyle};
                box-shadow: ${categoryBoxShadows[shadow]};
              `;

              return (
                <Container css={styles}>
                  <Container.Section>
                    <strong>Key:</strong> {shadow}
                    <br />
                    <br />
                    <strong>Value:</strong> {categoryBoxShadows[shadow]}
                  </Container.Section>
                </Container>
              );
            })}
          </BoxesContainer>
        </React.Fragment>
      );
    })}
  </MainContainer>
);

export default boxShadowsStory;
