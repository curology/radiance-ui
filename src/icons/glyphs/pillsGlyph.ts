import PillsGlyphPrimary from './svgs/pills-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const PillsGlyph = (props: IconProps) =>
  useIcon(PillsGlyphPrimary, PillsGlyphPrimary, props);
