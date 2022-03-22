import React from 'react';
import {
  Description,
  Heading,
  Source,
  Stories,
  Title,
} from '@storybook/addon-docs';
import type { Meta } from '@storybook/react';

export * from './borderRadius.stories';
export * from './boxShadows.stories';
export * from './colors.stories';
export * from './fonts.stories';
export * from './typography.stories';

const styledComponentSource = `export const StyledComponent = styled.div\`
  color: \${({ theme }) => theme.COLORS.primary};
\``;

const cssPropSource = '<Component css={(theme) => {}}>';

const useThemeSource = `import { useTheme } from '@emotion/react';
...
const theme = useTheme();
`;

const globalSource = '<Global styles={(theme) => {}} />';

const CHROMATIC_OPTIONS = { chromatic: { disable: true } } as const;

interface ThemeStories extends Meta {
  parameters: Meta['parameters'] & typeof CHROMATIC_OPTIONS;
  title: string;
}

const THEME_STORIES: ThemeStories = {
  title: 'Constants/Theme',
  parameters: {
    ...CHROMATIC_OPTIONS,
    docs: {
      page: () => (
        <React.Fragment>
          <Title />
          <Description />
          <Heading>Usage:</Heading>
          <p>
            The <code>theme</code> object is accessible from{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://emotion.sh/docs/theming#themeprovider-reactcomponenttype"
            >
              theme aware apps.
            </a>
            <br />
            There are 4 common scenarios where you can use the theme object ({' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://emotion.sh/docs/theming#usage"
            >
              emotion docs on theme usage
            </a>
            ):
          </p>
          <ol>
            <li>
              <code>styled</code>: as a prop
            </li>
            <li>
              <code>css</code>: as function parameter
            </li>
            <li>
              Inside a component using <code>withTheme/useTheme</code>
            </li>
            <li>
              <code>&lt;Global&gt;</code> component form the styles prop (
              <a
                target="_blank"
                rel="noreferrer"
                href="https://emotion.sh/docs/globals"
              >
                emotion docs on Global
              </a>
              )
            </li>
          </ol>
          <h3>Examples:</h3>
          <Source language="tsx" code={styledComponentSource} />
          <Source language="tsx" code={cssPropSource} />
          <Source language="tsx" code={useThemeSource} />
          <Source language="tsx" code={globalSource} />
          <Stories includePrimary />
        </React.Fragment>
      ),
    },
  },
};

export default THEME_STORIES;
