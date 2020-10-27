import { ThemeType } from 'src/constants/themes/types';

/**
 * We rely on TypeScript/Rollup aliasing in order to import from this file
 * when using the absolute path, e.g. import { useTheme } from 'emotion-theming'
 *
 * As such for this one import we need to use relative imports
 */
import {
  useTheme as useEmotionTheme,
  ThemeProvider,
} from '../../../../node_modules/emotion-theming';

export const useTheme = () => useEmotionTheme<ThemeType>();

export { ThemeProvider };
