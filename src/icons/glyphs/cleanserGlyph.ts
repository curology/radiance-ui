import CleanserGlyphPrimary from './svgs/cleanser-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const CleanserGlyph = (props: IconProps) =>
  useIcon(CleanserGlyphPrimary, CleanserGlyphPrimary, props);
