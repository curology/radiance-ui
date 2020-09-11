import type { StorybookConfig } from '@storybook/core/types';
// 6.1
// module.exports = {
//   stories: ['./src/*.stories.*'],
//   logLevel: 'debug',
//   addons: [
//     '@storybook/addon-essentials',
//     '@storybook/addon-controls',
//     '@storybook/addon-storysource',
//     {
//       name: '@storybook/addon-docs',
//       options: {
//         sourceLoaderOptions: {
//           parser: 'typescript',
//           injectStoryParameters: false,
//         },
//       },
//     },
//   ],
//   typescript: {
//     check: true,
//     checkOptions: {},
//     reactDocgenTypescriptOptions: {
//       propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
//     },
//   },
// } as StorybookConfig;

// import type { StorybookConfig } from '@storybook/core/types';

module.exports = {
  stories: ['../stories/**/index.ts'],
  logLevel: 'debug',
  // addons: [''],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
} as StorybookConfig;
