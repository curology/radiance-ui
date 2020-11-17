import SunGlyphPrimary from './svgs/sun-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SunGlyph = (props: IconProps) =>
  useIcon(SunGlyphPrimary, SunGlyphPrimary, props);
