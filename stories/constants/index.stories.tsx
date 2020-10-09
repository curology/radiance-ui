import React from 'react';
import {
  Title,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';

export * from './availableConstants.stories';
export * from './boxShadows.stories';
export * from './colors.stories';

// const MainContainer = styled.div`
//   padding: ${SPACER.xlarge};
// `;

// const BoxesContainer = styled.div`
//   margin: ${SPACER.xlarge} 0;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-around;
//   align-items: center;

//   > div {
//     margin: 1rem;
//   }
// `;

// const BaseContainer = styled<{ boxShadow: string }>(Container)`
//   width: 350px;
//   margin: ${SPACER.large};
//   box-shadow: ${({ boxShadow }) => {
//     console.log('boxShadow', boxShadow);
//     return boxShadow;
//   }} !important;
// `;

// export const BoxShadows = () => (
//   <MainContainer>
//     {Object.keys(BOX_SHADOWS).map((category, idx) => {
//       if (category === 'default') {
//         return null;
//       }

//       const categoryBoxShadows = BOX_SHADOWS[category];

//       if (idx > 2) return null;

//       return (
//         <React.Fragment key={idx}>
//           <Typography.Title>{category}:</Typography.Title>
//           <BoxesContainer>
//             {Object.keys(categoryBoxShadows).map((shadow) => (
//               <BaseContainer
//                 key={categoryBoxShadows[shadow]}
//                 boxShadow={categoryBoxShadows[shadow]}
//                 // css={css`
//                 //   box-shadow: ${categoryBoxShadows[shadow]};
//                 // `}
//               >
//                 <Container.Section>
//                   <strong>Key:</strong> {shadow}
//                   <br />
//                   <br />
//                   <strong>Value:</strong> {categoryBoxShadows[shadow]}
//                 </Container.Section>
//               </BaseContainer>
//             ))}
//           </BoxesContainer>
//         </React.Fragment>
//       );
//     })}
//   </MainContainer>
// );

// BoxShadows.storyName = 'BOX_SHADOWS';

export default {
  title: 'CONSTANTS',
  parameters: {
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Source
            language="tsx"
            code={
              "import { BOX_SHADOWS, COLORS, SPACER } from 'radiance-ui/lib/constants';"
            }
          />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};
