import VitaminCGlyphPrimary from './svgs/vitamin-c-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const VitaminCGlyph = (props: IconProps) =>
  useIcon(VitaminCGlyphPrimary, VitaminCGlyphPrimary, props);
