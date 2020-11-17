import MoisturizerGlyphPrimary from './svgs/moisturizer-glyph.svg';
import { useIcon, IconProps } from '../../shared-components/icon';

export const MoisturizerGlyph = (props: IconProps) =>
  useIcon(MoisturizerGlyphPrimary, MoisturizerGlyphPrimary, props);
