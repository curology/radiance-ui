import DarkSpotsGlyphPrimary from './svgs/dark-spots-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const DarkSpotsGlyph = (props: IconProps) =>
  useIcon(DarkSpotsGlyphPrimary, DarkSpotsGlyphPrimary, props);
