import FlagCanadaGlyphPrimary from './svgs/flag-canada-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const FlagCanadaGlyph = (props: IconProps) =>
  useIcon(FlagCanadaGlyphPrimary, FlagCanadaGlyphPrimary, props);
