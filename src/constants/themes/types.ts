import PropTypes from 'prop-types';

import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';

type BorderRadius =
  | typeof primaryTheme['BORDER_RADIUS']
  | typeof secondaryTheme['BORDER_RADIUS'];

export const BORDER_RADIUS_PROP_TYPES = PropTypes.oneOf([
  ...(Object.keys(primaryTheme.BORDER_RADIUS) as Array<
    keyof typeof primaryTheme.BORDER_RADIUS
  >),
  ...(Object.keys(secondaryTheme.BORDER_RADIUS) as Array<
    keyof typeof secondaryTheme.BORDER_RADIUS
  >),
]);

type BoxShadows =
  | typeof primaryTheme['BOX_SHADOWS']
  | typeof secondaryTheme['BOX_SHADOWS'];

export type Colors =
  | typeof primaryTheme['COLORS']
  | typeof secondaryTheme['COLORS'];

type Fonts = typeof primaryTheme['FONTS'] | typeof secondaryTheme['FONTS'];

type Typography =
  | typeof primaryTheme['TYPOGRAPHY']
  | typeof secondaryTheme['TYPOGRAPHY'];

export type ThemeColors = valueof<Colors>;

export const COLORS_PROP_TYPES = PropTypes.oneOf([
  ...Object.values(primaryTheme.COLORS),
  ...Object.values(secondaryTheme.COLORS),
]);

export interface ThemeType {
  BORDER_RADIUS: BorderRadius;
  BOX_SHADOWS: BoxShadows;
  COLORS: Colors;
  FONTS: Fonts;
  TYPOGRAPHY: Typography;
  __type: 'primary' | 'secondary';
}
