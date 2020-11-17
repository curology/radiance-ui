import LunchGlyphPrimary from './svgs/lunch-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const LunchGlyph = (props: IconProps) =>
  useIcon(LunchGlyphPrimary, LunchGlyphPrimary, props);
