import { primaryTheme } from './primaryTheme';
import { secondaryTheme } from './secondaryTheme';
import { tertiaryTheme } from './tertiaryTheme';

type BorderRadius =
  | typeof primaryTheme['BORDER_RADIUS']
  | typeof secondaryTheme['BORDER_RADIUS']
  | typeof tertiaryTheme['BORDER_RADIUS'];

type BoxShadows =
  | typeof primaryTheme['BOX_SHADOWS']
  | typeof secondaryTheme['BOX_SHADOWS']
  | typeof tertiaryTheme['BOX_SHADOWS'];

export type Colors =
  | typeof primaryTheme['COLORS']
  | typeof secondaryTheme['COLORS']
  | typeof tertiaryTheme['COLORS'];

type Fonts =
  | typeof primaryTheme['FONTS']
  | typeof secondaryTheme['FONTS']
  | typeof tertiaryTheme['FONTS'];

type Typography =
  | typeof primaryTheme['TYPOGRAPHY']
  | typeof secondaryTheme['TYPOGRAPHY']
  | typeof tertiaryTheme['TYPOGRAPHY'];

export type ThemeColors = valueof<Colors>;

export interface ThemeType {
  BORDER_RADIUS: BorderRadius;
  BOX_SHADOWS: BoxShadows;
  COLORS: Colors;
  FONTS: Fonts;
  TYPOGRAPHY: Typography;
  __type: 'primary' | 'secondary' | 'tertiary';
}
