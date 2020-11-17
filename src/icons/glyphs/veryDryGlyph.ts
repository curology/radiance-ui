import VeryDryGlyphPrimary from './svgs/very-dry-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const VeryDryGlyph = (props: IconProps) =>
  useIcon(VeryDryGlyphPrimary, VeryDryGlyphPrimary, props);
