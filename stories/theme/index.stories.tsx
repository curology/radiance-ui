import React from 'react';
import {
  Title,
  Description,
  Heading,
  Source,
  Stories,
} from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { BREAKPOINTS } from 'src/constants';

export * from './boxShadows.stories';
export * from './colors.stories';
export * from './fonts.stories';
export * from './typography.stories';

const styledComponentSource =
  // eslint-disable-next-line no-template-curly-in-string
  'export const StyledComponent = styled.div`\n  color: ${({ theme }) => theme.COLORS.primary};\n`';

const cssPropSource =
  // eslint-disable-next-line no-template-curly-in-string
  '<Component css={(theme: ThemeType) => css`color: ${theme.COLORS.primary}`}>';

export default {
  title: 'Constants/Theme',
  parameters: {
    chromatic: { disable: true },
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <Description>
            The `theme` object is accessible (in theme aware apps using
            `emotion-theming`) from these 2 common contexts: Styled component
            (as a prop) and as a React component css prop (as a function
            parameter):
          </Description>
          <Source language="tsx" code={styledComponentSource} />
          <Source language="tsx" code={cssPropSource} />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
} as Meta;
