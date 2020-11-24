import {} from '@emotion/react/types/css-prop';
/// <reference types="@emotion/react/types/css-prop" />
import { Interpolation } from '@emotion/react';

import { ThemeType } from '../constants/themes/types';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}

declare module 'react' {
  interface Attributes {
    css?: Interpolation<ThemeType>;
  }
}
