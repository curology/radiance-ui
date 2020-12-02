import PropTypes from 'prop-types';

import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';

type BoxShadow =
  | typeof primaryTheme['BOX_SHADOW']
  | typeof secondaryTheme['BOX_SHADOW'];

type Colors = typeof primaryTheme['COLORS'] | typeof secondaryTheme['COLORS'];

type Fonts = typeof primaryTheme['FONTS'] | typeof secondaryTheme['FONTS'];

type Typography =
  | typeof primaryTheme['TYPOGRAPHY']
  | typeof secondaryTheme['TYPOGRAPHY'];

export type ThemeColors = valueof<Colors>;
export type ThemeColorOrEmptyString = ThemeColors | '';

export const COLORS_PROP_TYPES = PropTypes.oneOf([
  ...Object.values(primaryTheme.COLORS),
  ...Object.values(secondaryTheme.COLORS),
]);

export type ThemeType = {
  __type: 'primary' | 'secondary';
  BOX_SHADOW: BoxShadow;
  COLORS: Colors;
  FONTS: Fonts;
  TYPOGRAPHY: Typography;
};
