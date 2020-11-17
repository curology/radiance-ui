import FlagUSAGlyphPrimary from './svgs/flag-u-s-a-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const FlagUSAGlyph = (props: IconProps) =>
  useIcon(FlagUSAGlyphPrimary, FlagUSAGlyphPrimary, props);
