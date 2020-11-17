import EyecreamGlyphPrimary from './svgs/eyecream-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const EyecreamGlyph = (props: IconProps) =>
  useIcon(EyecreamGlyphPrimary, EyecreamGlyphPrimary, props);
