import FirmnessGlyphPrimary from './svgs/firmness-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const FirmnessGlyph = (props: IconProps) =>
  useIcon(FirmnessGlyphPrimary, FirmnessGlyphPrimary, props);
