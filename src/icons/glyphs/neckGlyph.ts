import NeckGlyphPrimary from './svgs/neck-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const NeckGlyph = (props: IconProps) =>
  useIcon(NeckGlyphPrimary, NeckGlyphPrimary, props);
