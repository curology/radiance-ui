/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

import { ThemeType } from '../constants/themes/types';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
