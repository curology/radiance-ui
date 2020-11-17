import GlobeGlyphPrimary from './svgs/globe-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const GlobeGlyph = (props: IconProps) =>
  useIcon(GlobeGlyphPrimary, GlobeGlyphPrimary, props);
