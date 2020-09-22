import primaryTheme from './primary';
import secondaryTheme from './secondary';

type BoxShadow =
  | typeof primaryTheme['BOX_SHADOW']
  | typeof secondaryTheme['BOX_SHADOW'];

type Colors = typeof primaryTheme['COLORS'] | typeof secondaryTheme['COLORS'];

export type ThemeType = {
  __type: 'primary' | 'secondary';
  BOX_SHADOW: BoxShadow;
  COLORS: Colors;
};
