import SunblockGlyphPrimary from './svgs/sunblock-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SunblockGlyph = (props: IconProps) =>
  useIcon(SunblockGlyphPrimary, SunblockGlyphPrimary, props);
