import LipBalmGlyphPrimary from './svgs/lip-balm-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const LipBalmGlyph = (props: IconProps) =>
  useIcon(LipBalmGlyphPrimary, LipBalmGlyphPrimary, props);
