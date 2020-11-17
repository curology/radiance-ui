import NoneGlyphPrimary from './svgs/none-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const NoneGlyph = (props: IconProps) =>
  useIcon(NoneGlyphPrimary, NoneGlyphPrimary, props);
