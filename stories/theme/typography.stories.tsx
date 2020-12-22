import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { SPACER } from 'src/constants';
import { Typography } from 'src/shared-components';

const MainContainer = styled.div`
  padding: ${SPACER.xlarge};
`;

const CategoryContainer = styled.div`
  margin-bottom: ${SPACER.medium};
`;

export const TYPOGRAPHY = () => {
  const theme = useTheme();
  const typographyCategoriesKeys = Object.keys(theme.TYPOGRAPHY) as Array<
    keyof typeof theme['TYPOGRAPHY']
  >;

  return (
    <MainContainer>
      {typographyCategoriesKeys.map((typographyCategoryKey) => {
        const typographyKeys = Object.keys(
          theme.TYPOGRAPHY[typographyCategoryKey],
        );

        return (
          <CategoryContainer key={typographyCategoryKey}>
            <Typography.Title>{typographyCategoryKey}</Typography.Title>
            {typographyKeys.map((typographyKey) => {
              const typographyValue = theme.TYPOGRAPHY[typographyCategoryKey][
                typographyKey
              ] as string;

              return (
                <p key={typographyKey}>
                  <strong>{typographyKey}</strong>: {typographyValue}
                </p>
              );
            })}
          </CategoryContainer>
        );
      })}
    </MainContainer>
  );
};
