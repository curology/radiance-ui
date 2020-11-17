import ZincGlyphPrimary from './svgs/zinc-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const ZincGlyph = (props: IconProps) =>
  useIcon(ZincGlyphPrimary, ZincGlyphPrimary, props);
