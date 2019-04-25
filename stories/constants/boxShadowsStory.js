import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { SPACING } from 'src/constants';
import BOX_SHADOWS from 'src/constants/boxShadows';
import { Container, Typography } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACING.medium};
`;

const BoxesContainer = styled.div`
  margin: ${SPACING.medium} 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const baseBoxStyle = css`
  width: 350px;
  margin: ${SPACING.base};
`;

const boxShadowsStory = () => (
  <MainContainer>
    <Typography.Heading>Box Shadows Examples:</Typography.Heading>
    <BoxesContainer>
      {Object.keys(BOX_SHADOWS).map(shadow => {
        const styles = css`
          ${baseBoxStyle};
          box-shadow: ${BOX_SHADOWS[shadow]};
        `;

        return (
          <Container css={styles}>
            <Container.Section>
              <strong>Key:</strong> {shadow}
              <br />
              <br />
              <strong>Value:</strong> {BOX_SHADOWS[shadow]}
            </Container.Section>
          </Container>
        );
      })}
    </BoxesContainer>
  </MainContainer>
);

export default boxShadowsStory;
