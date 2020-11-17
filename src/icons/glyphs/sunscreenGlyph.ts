import SunscreenGlyphPrimary from './svgs/sunscreen-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const SunscreenGlyph = (props: IconProps) =>
  useIcon(SunscreenGlyphPrimary, SunscreenGlyphPrimary, props);
