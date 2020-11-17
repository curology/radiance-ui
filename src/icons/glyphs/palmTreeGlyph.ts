import PalmTreeGlyphPrimary from './svgs/palm-tree-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const PalmTreeGlyph = (props: IconProps) =>
  useIcon(PalmTreeGlyphPrimary, PalmTreeGlyphPrimary, props);
